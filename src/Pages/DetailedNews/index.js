import React, { useContext, useEffect, useState } from 'react';
import { Link,useParams } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import { Box, CardActionArea, CardActions } from '@mui/material';
import Divider from '@mui/material/Divider';
import { format, parse} from 'date-fns';
import styles from '../../Styles'
import PageContainer from '../../PageContainer';
import newsContext from '../../ContextData';

const DetailedNews = () => {
    const {index,title}=useParams()
    const {news,setNews}=useContext(newsContext)
  const selectedItem = news.find((item, idx) => idx === parseInt(index));
    let firstValue=Math.floor(Math.random()*7)
    let similiarNews=news.slice(firstValue,firstValue+3)
    return (
      <PageContainer>
        <Box style={styles.mainDetailedCon}>
        <Box style={styles.pageContainerStyle}>
          {selectedItem && (
            <Card  style={styles.cardStyleDetailed}>
              <Box style={styles.firstBoxDetailed}>
              <Box style={styles.secondBoxDetailed}>
              <CardActionArea>
                <CardMedia
                  style={styles.cardMediaStyleDetailed }
                  sx={{ width: 380 }}
                  component="img"
                  height="300"
                  image={selectedItem.imageUrl}
                />
                <CardActions style={styles.cardactionStylesDetailed}>
                <div style={styles.cardIcpnsStyles}>
                  <div style={styles.iconsStyle}><AccessTimeIcon />
                    <span style={{ paddingLeft: "4px" }}>{format(parse(selectedItem.date, 'EEEE, d MMMM, yyyy', new Date()), 'dd MMM yyyy')}</span>
                  </div>
                  <div style={styles.iconsStyle}><PersonOutlineIcon />
                    <span style={{ paddingLeft: "4px" }}>{selectedItem.author}</span>
                  </div>
                </div>
              </CardActions>
              </CardActionArea>
              </Box>
              <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {selectedItem.title}
                  </Typography>
                  <Divider style={styles.divider} />
                  <Typography variant="body2" color="text.secondary" paddingTop={"10px"}>
                    {selectedItem.content}
                  </Typography>
                </CardContent>
              </Box>
            </Card>
          )}
        </Box>
        <Box style={styles.mainSim}>
        <Box ><h2>Similiar News</h2></Box>
        <Box style={styles.simGap}>
           {
           similiarNews.map((item,index)=>(
            <Link  to={title?`/news/${title}/${index+firstValue}`:`/news/all/${index+firstValue}`}>
         

  <Card style={styles.cardStyleSim} >
      <CardActionArea>
           <Box  sx={{
            '&:before':{
              content: '""',
              width:"600px",
              height:"180px",
              position:"absolute",
              background:'rgba(65, 71, 98, 0.7)',
            },
            '&:hover': {
              opacity: "0.1", 
            },
      }}> 
      </Box>
          <Box style={styles.simTextBox}>
            <Box style={styles.simText}><h3>{item.title}</h3></Box>
          <CardActions style={styles.cardactionStylesSim}>
        <div style={styles.cardIcpnsStyles} >
          <div style={styles.iconsStyle}><AccessTimeIcon />
            <span style={{paddingLeft:"4px"}}> {format(parse(item.date, 'EEEE, d MMMM, yyyy', new Date()), 'dd MMM yyyy')}</span>
            </div>
          <div style={styles.iconsStyle}><PersonOutlineIcon/> 
          <span style={{paddingLeft:"4px"}}>{item.author}</span>
          </div>
        </div>
      </CardActions>
          </Box>
        
        <CardMedia
        style={styles.cardMediaStyle}
          component="img"
          sx={{ width: 330 }}
          height="190"
          image={item.imageUrl}
          alt="green iguana"
        />
      </CardActionArea>
            </Card>
            </Link>
           ))
           }
        </Box>
        </Box>
        </Box>
      </PageContainer>
    );
}
export default DetailedNews;