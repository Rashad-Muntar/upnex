import { extendTheme } from "@chakra-ui/react"

const breakpoints = {

        sm: "320px",
    md: "768px",
    lg: "960px",
    xl: "1200px",
    
}
 const theme = extendTheme({
    colors: {
         primaryBg: "#fff5f5",
        primaryYellow: "#f6b723"
    },
    breakpoints
 })
  
 export default theme

