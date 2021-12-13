import { Body, Controller, Get, Param, Post, Res } from '@nestjs/common';
import { Response } from 'express';
import { WorkOrderService } from './work-order.service';
import { CreateFields } from './work-order.type';

@Controller('work-order')
export class WorkOrderController {
  constructor(private workOrderService: WorkOrderService) {}
  @Post()
  async create(@Body() createFields: CreateFields, @Res() response: Response) {
    try {
      await this.workOrderService.create(createFields);
      response.status(201).json({ message: 'Registro exitoso' });
    } catch (error) {
      response.status(400).json({ menssage: 'Problemas al crear registro' });
    }
  }

  @Get('date/:date')
  async getOrdersByDate(@Param('date') date: Date) {
    return await this.workOrderService.getOrdersByDate(date);
  }

  @Get('notfinish')
  async getOrdersNotFinished() {
    return await this.workOrderService.getOrdersNotFinished();
  }
}
