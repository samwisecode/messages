import { Injectable } from '@nestjs/common';
import { CreateMessageDto } from './dto/create-message.dto';
import { UpdateMessageDto } from './dto/update-message.dto';
import { MessagesRepository } from './messages.repository';

@Injectable()
export class MessagesService {
  messagesRepo: MessagesRepository;

  constructor() {
    // service is creating its own dependencies
    // messages service cannot work without messages repository
    this.messagesRepo = new MessagesRepository();
  }

  create(createMessageDto: CreateMessageDto) {
    return createMessageDto;
  }

  findAll() {
    return [
      {
        id: 1,
        title: 'Message 1',
        sender_name: 'Sam',
        sender_id: 1,
      },
      {
        id: 2,
        title: 'Message 2',
      },
      {
        id: 3,
        title: 'Message 3',
      },
    ];
  }

  findOne(id: number) {
    return `This action returns a #${id} message`;
  }

  update(id: number, updateMessageDto: UpdateMessageDto) {
    return `This action updates a #${id} message`;
  }

  remove(id: number) {
    return `This action removes a #${id} message`;
  }
}
