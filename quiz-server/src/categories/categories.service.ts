import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Category, CategoryDocument } from './schemas/category.schema';
import { CategoryDto } from './dto/category.dto';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectModel(Category.name) private categoryModel: Model<CategoryDocument>,
  ) {}

  async getAll(): Promise<Category[]> {
    return this.categoryModel.find().exec();
  }

  async getById(id: string): Promise<Category> {
    return this.categoryModel.findById(id);
  }

  async create(categoryDto: CategoryDto): Promise<Category> {
    const newCategory = new this.categoryModel(CategoryDto);
    return newCategory.save();
  }

  async remove(id: string): Promise<Category> {
    return this.categoryModel.findByIdAndRemove(id);
  }

  async update(id: string, categoryDto: CategoryDto): Promise<Category> {
    return this.categoryModel.findByIdAndUpdate(id, categoryDto, { new: true });
  }
}
