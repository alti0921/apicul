import { PartialType } from '@nestjs/mapped-types';
import { CreateTaskcategoriaDto } from './create-taskcategoria.dto';

export class UpdateTaskcategoriaDto extends PartialType(CreateTaskcategoriaDto) {}
