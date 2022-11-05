import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ReviewModel } from './review.model/review.model';

@Controller('review')
export class ReviewController {
	@Post('create')
	async create(@Body() dto: Omit<ReviewModel, '_id'>) {
		return 'This action adds a new review';
	}

	@Delete(':id')
	async delete(@Param('id') id: string) {
		return 'remove';
	}

	@Get('byProduct')
	async getByProduct(@Param('id') id: string) {
		return 'getByProduct';
	}
}
