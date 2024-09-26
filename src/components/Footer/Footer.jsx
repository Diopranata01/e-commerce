import { Box } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import "./Footer.scss"

const categories = [
  {
    name : ['Men', 'Women', 'Kids', 'Accessories']
  },
  {
    links : ['Faq', 'Pages', 'Instagram', 'Shopee']
  }
]

const Footer = () => {

  return (
    <div className='footer'>
      <div className="wrapper">
      <div className="col1">
        <Box sx={{ width: {lg: 200}, flexDirection: 'column', display: 'flex'} }>
          <span>
            <h3>Categories</h3>
          </span>
          {
            categories[0].name?.map((item, index)=>(
              <Link 
              key={index} 
              to={`/product/${item}`}
              style={{ textDecoration: 'none', paddingTop: '12px'}}
              >
                <span>{item}</span>
              </Link>
            ))
          }
        </Box>
      </div>
      <div className="col2">
        <Box sx={{ width: {lg: 200}, flexDirection: 'column', display: 'flex'} }>
          <span>
            <h3>Links</h3>
          </span>
          {
            categories[1].links?.map((item, index)=>(
              <span key={index}>{item}</span>
            ))
          }
        </Box>
      </div>
      <div className="col3">
        <Box sx={{ width: {lg: 200}, flexDirection: 'column', display: 'flex'} }>
          <span>
            <h3>About</h3>
          </span>
          <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel repudiandae fuga expedita</span>
        </Box>
      </div>
      <div className="col4">
        <Box sx={{ width: {lg: 200}, flexDirection: 'column', display: 'flex'} }>
          <span>
            <h3>Contact</h3>
          </span>
          <span>Lorem ipsum, dolor sit amet consectetur.</span>
        </Box>
      </div>
      </div>
      <div className="copyright">
        <span>Metaderma.ltd &copy; Copyright</span>
      </div>
    </div>
  )
}

export default Footer