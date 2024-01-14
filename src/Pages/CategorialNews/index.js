import React, { useContext, useEffect, useState } from 'react';
import PageContainer from '../../PageContainer';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import { CardActionArea, CardActions } from '@mui/material';
import { styleContext } from '../../ContextData/styleContext';
const CategorialNews = () => {
  const {styles}=useContext(styleContext)
    const [news,setNews]=useState([])
    const {title}=useParams()
    useEffect(() => {
      axios.get(title?`https://inshortsapi.vercel.app/news?category=${title}`:'https://inshortsapi.vercel.app/news?category=all')
        .then(({data})=>{
            setNews(data.data)
        })
    }, [title])
    return <PageContainer>
      <div style={styles.pageContainerStyle}>
      {
      news.map((item)=>(
    <Card style={styles.cardStyle} >
      <CardActionArea>
        <CardMedia
        style={styles.cardMediaStyle}
          component="img"
          height="240"
          image={item.imageUrl          }
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {item.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {item.content}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions style={styles.cardactionStyles}>
        <div style={styles.cardIcpnsStyles} >
          <div style={styles.iconsStyle}><AccessTimeIcon/> {item.date}</div>
          <div style={styles.iconsStyle}><PersonOutlineIcon/> {item.author}</div>
        </div>
      </CardActions>
    </Card>
    ))}
</div>
    </PageContainer>
}

export default CategorialNews;