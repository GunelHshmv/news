import React, { useContext } from 'react';
import PageContainer from '../../PageContainer';
import { Link, useParams } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Divider from '@mui/material/Divider';
import { format, parse} from 'date-fns';
import styles from '../../Styles'
import newsContext  from '../../ContextData';

const CategorialNews = () => {
  const {title}=useParams()
    const {news}=useContext(newsContext)
    return (
        <PageContainer>
      <div style={styles.pageContainerStyle}>
      {
      news.map((item,index)=>(
    <Card style={styles.cardStyle} >
      <CardActionArea>
        <CardMedia
        style={styles.cardMediaStyle}
          component="img"
          height="240"
          image={item.imageUrl}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {item.title}
          </Typography>
          <Divider style={styles.divider} />
          <Typography variant="body2" color="text.secondary" paddingTop={"10px"} >
            {item.content}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions style={styles.cardactionStyles}>
        <div style={styles.cardIcpnsStyles} >
          <div style={styles.iconsStyle}><AccessTimeIcon />
            <span style={{paddingLeft:"4px"}}> {format(parse(item.date, 'EEEE, d MMMM, yyyy', new Date()), 'dd MMM yyyy')}</span>
            </div>
          <div style={styles.iconsStyle}><PersonOutlineIcon/> 
          <span style={{paddingLeft:"4px"}}>{item.author}</span>
          </div>
          
        </div>
        <div style={{display:"flex",alignItems:'center'}}>
          <span style={{position:"absolute",right:"24px"}}>
    <Link to={title?`/news/${title}/${index}`:`/news/all/${index}`}>
            <Button variant='outlined' color='primary'><b>MORE</b></Button>
    </Link>
          </span>
          </div>
      </CardActions>
    </Card>
    ))}
</div>
    </PageContainer>
    )
}

export default CategorialNews;
