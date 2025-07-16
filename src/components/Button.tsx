import { cva } from 'class-variance-authority'
import React, { ButtonHTMLAttributes } from 'react'

const classes = cva("border rounded-full h-12 px-6 font-medium",{
    variants: {
        variant: {
            primary: "bg-lime-400 text-neutral-900 border-lime-400",
            secondary: "border-white text-white bg-transparent"
        },
        size: {
            sm: "h-10"
        }
    },
})
const Button = (props: {variant: "primary" | "secondary", size?: "sm"} & ButtonHTMLAttributes<HTMLButtonElement>) => {
    const { variant, className, size, ...rest } = props;
  return (
    <button className={classes({variant, size, className})} {...rest}>
    </button> 
  )
}

export default Button