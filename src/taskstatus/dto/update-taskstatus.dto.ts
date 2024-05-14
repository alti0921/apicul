import { PartialType } from '@nestjs/mapped-types';
import { CreateTaskstatusDto } from './create-taskstatus.dto';

export class UpdateTaskstatusDto extends PartialType(CreateTaskstatusDto) {}
