import { Controller, Get, Param, UsePipes } from '@nestjs/common';
import { ServiceEnum } from 'src/constants/service';
import { AddressService } from './address.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import TestPipes from '../../core/pipes/testPipe';

@ApiTags('地址')
@UsePipes(new TestPipes())
@Controller(ServiceEnum.ADDRESS)
export class AddressController {
  constructor(private addressService: AddressService) {}

  @ApiOperation({ summary: '获取文章详情' })
  @Get('detail/:id')
  getDetail(@Param() param: { id: number }) {
    console.log('id',param?.id);
    
    return this.addressService.getDetail(param?.id);
  }
}
