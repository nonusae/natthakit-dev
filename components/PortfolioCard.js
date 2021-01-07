import { Children } from 'react';
import { Card, CardHeader, CardBody, CardText, CardTitle } from 'reactstrap';

const PortfolioCard = ({id, title, jobTitle, location, description, children}) => {
  return <Card className="portfolio-card">
    <CardHeader className="portfolio-card-header">{jobTitle}</CardHeader>
    <CardBody>
      <p className="portfolio-card-city">{location}</p>
      <CardTitle className="portfolio-card-title">{title}</CardTitle>
      <CardText className="portfolio-card-text">{description}</CardText>
      { children }
    </CardBody>
  </Card>
}

export default PortfolioCard;
