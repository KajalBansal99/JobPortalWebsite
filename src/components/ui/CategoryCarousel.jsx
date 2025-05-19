import React from 'react'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './carousel'
import { Button } from './button'

const categories = [ 
  "Frontend Developer", 
  "Backend Developer", 
  "Data Science", 
  "Graphic Designer", 
  "FullStack Developer" 
] 

const CategoryCarousel = () => { 
  return ( 
    <div className="w-full max-w-4xl mx-auto my-20 p-4">
      <h2 className="text-3xl font-bold mb-8 text-center">
        <span className="text-[#6A38C2]">Browse</span> Categories
      </h2>
      <Carousel>
        <CarouselContent>
          {categories.map((category, index) => ( 
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3"> 
              <Button variant="outline" className="rounded-full w-full">
                {category}
              </Button> 
            </CarouselItem> 
          ))} 
        </CarouselContent> 
        <CarouselPrevious /> 
        <CarouselNext /> 
      </Carousel> 
    </div> 
  ) 
} 

export default CategoryCarousel