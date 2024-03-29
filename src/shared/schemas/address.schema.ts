import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { DBCollectionEnum } from '@shared/constants/DBcollection'
import mongoose, { Document } from 'mongoose'
export type AddressDoc = Address & Document
@Schema({ collection: DBCollectionEnum.ADDRESS })
export class Address extends Document {
    // 使用declare 覆盖自生成的字段
    declare _id?: mongoose.Schema.Types.ObjectId

    // 不需要向用户展示的字段 使用select
    @Prop({
        select: false
    })
    declare __v?: number

    @Prop({
        required: true,
        trim: true, // 两边去空
        minlength: 2 // 最小长度为2
    })
    name: string

    @Prop({ required: true })
    age: number

    // 全局转换为大写
    @Prop({ uppercase: true })
    sex: string

    // select 为false，表示不给前端返回
    @Prop({ select: false })
    school: string

    // 正则匹配邮件格式
    @Prop({
        required: true
    })
    email: string

    @Prop({ required: true })
    phone: string
}
export const AddressSchema = SchemaFactory.createForClass(Address)
