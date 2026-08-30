
import React from 'react'
import { RadioGroup, RadioGroupItem } from './ui/radio-group'
import { Label } from './ui/label'

const filterData = 
[
  {
    filterType: "Location",
    Array:["Delhi NCR", "Bangalore", "Pune", "Mumbai", "Hyderabad"]
  },
  {
    filterType: "Industry",
    Array:["Frontend Developer", "Backend Developer", "Fullstack Developer",]
  },
  {
    filterType: "Salary",
    Array:["0-40k", "42-11Lakh", "1Lakh-5Lakh",]
  }
]
const FilterCard = () => {
  return (
    <div className=' bg-white rounded-md'>
      <h1>Filter Jobs</h1>
      <hr className='mt-3' />
      <RadioGroup>
      {
        filterData.map((data, index) => (
          <div>
          <h1 className='font-bold text-lg'>{data.filterType}</h1>
          {
            data.Array.map((item, index) => {
              return (
                <div className='flex items-center space-x-1 my-2'>
                  <RadioGroupItem value = {item}/>
                  <Label>{item}</Label>
                </div>
              )

            })
          }
          </div>
        ))
      }
      </RadioGroup>
    </div>
  )
}

export default FilterCard