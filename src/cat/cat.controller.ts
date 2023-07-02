
import { userByIdPipe } from './../pipe/UserByIdPipe.pipe';
import { Controller, Get, Post, Body, Patch, Param, Delete, UsePipes, Header, DefaultValuePipe, Query, ParseEnumPipe, UseGuards, ParseIntPipe } from '@nestjs/common';
import { ValidationPipe } from 'src/pipe/pipe.pipe';
import { CatService } from './cat.service';
import { CreateCatDto } from './create-cat.dto';
import { Roles } from 'src/role/roles.decorator';
import { RolesGuard } from 'src/role/role.guard';
import { User } from 'src/role/user.decorator';

enum CatType {
  Small = 'small',
  Medium = 'medium',
  Large = 'large',
}
@Controller('cat')
// @UseGuards(RolesGuard)
export class CatController {
  constructor(
    private readonly catService: CatService,
    
    ) {}
 
  @Post()
  // @UsePipes(ValidationPipe)
  create(@Body(ValidationPipe) createCatDto: CreateCatDto) {
    return this.catService.create({name:"zs"});
  }

  @Get("Page")
  findAll(
    @User('page',ParseIntPipe)  @Query('limit', new DefaultValuePipe(10)) page: number,
    @Query('limit', new DefaultValuePipe(10)) limit: number,
  ) {

    console.log(typeof page)
    // 如果请求中没有提供page参数或page参数的值为undefined，则page将被设置为默认值1
    // 如果请求中没有提供limit参数或limit参数的值为undefined，则limit将被设置为默认值10
    return `Finding cats. Page: ${page}, Limit: ${limit}`;
  }

  @Get(":id")
  @Roles('admin')
  getId(@Param("id",new DefaultValuePipe('defaultId')) id :string){
    return `Finding cat with id: ${id}`;
    return "id="+id
  }

  


  @Get('type/:type')
  findOne(@Param('type', new ParseEnumPipe(CatType)) type: CatType) {
    // 参数type的值将会被解析为CatType枚举类型
    console.log(type); // 可能的值: CatType.Small, CatType.Medium, CatType.Large

    return `Finding cat of type: ${type}`;
  }

}
