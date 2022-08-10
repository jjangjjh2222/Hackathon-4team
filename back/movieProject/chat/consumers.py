# 동기적으로 구현
# 비동기적(asynchronous)으로 구현하는게 훨씬 성능이 좋지만,
# 장고 모델 접근에서 문제가 발생할 수 있으니 Consumer 문서를 참고했다.

import json
from asgiref.sync import async_to_sync
from channels.generic.websocket import WebsocketConsumer

class ChatConsumer(WebsocketConsumer):
    def connect(self):
        self.room_name = self.scope['url_route']['kwargs']['room_name']
        self.room_group_name = 'chat_%s' % self.room_name

        # Join room group
        async_to_sync(self.channel_layer.group_add)(
            self.room_group_name,
            self.channel_name
        )

        self.accept()

    def disconnect(self, close_code):
        # Leave room group
        async_to_sync(self.channel_layer.group_discard)(
            self.room_group_name,
            self.channel_name
        )

    # Receive message from WebSocket
    def receive(self, text_data):
        username = self.scope["user"].nickname
        text_data_json = json.loads(text_data)
        message = text_data_json['message']
        message = (username + ': ' + message)

        # Send message to room group
        async_to_sync(self.channel_layer.group_send)(
            self.room_group_name,
            {
                'type': 'chat_message',
                'message': message
            }
        )

    # Receive message from room group
    def chat_message(self, event):
        message = event['message']
        username = self.scope["user"].nickname

        # Send message to WebSocket
        self.send(text_data=json.dumps({
            'message': message,
            'username': username,
        }))


