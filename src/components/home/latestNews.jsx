import React from "react";
import { Col, Container, Row } from "reactstrap";
import ThemeCard from "../shared/themeCard";
import { articles } from "../../utility/newsapi";
import { truncate } from "../../utility/commonFunctions";
const LatestNews = () => {
  return (
    <Container className="my-5">
      <h2 className="font-weight-bold display-4 mb-3">Latest News</h2>
      <Row className="mt-5">
        {articles.map(
          (ele) =>
            ele.showOnHomepage && (
              <Col lg={4} key={ele.id} className="mb-3">
                <ThemeCard
                  cardSubTitle={truncate(ele.title, 40)}
                  cardImg={{ src: ele.urlToImage }}
                  cardText={ele.description}
                />
              </Col>
            )
        )}
      </Row>
    </Container>
  );
};

export default LatestNews;
