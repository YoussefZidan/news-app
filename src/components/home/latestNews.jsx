import React, { useEffect } from "react";
import { Card, CardBody, CardHeader, Col, Container, Row } from "reactstrap";
import ThemeCard from "../shared/themeCard";
import { truncate } from "../../utility/commonFunctions";
import { getNews, viewSingleNews } from "./../../redux/news/newsActions";
import { useDispatch, useSelector } from "react-redux";
import { history } from "./../../history";
import Skeleton from "react-loading-skeleton";
import { randomNumber } from "./../../utility/commonFunctions";
import * as Icon from "react-feather";

const LatestNews = () => {
  const { news } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNews({ showOnHomepage: true }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const renderNews = () => {
    if (news.articles) {
      return (
        <Row className="mt-5">
          {news.articles.map((ele) => (
            <Col
              lg={4}
              key={ele.id}
              className="mb-3"
              onClick={() => {
                history.push(`/details/${ele.id}`);
                dispatch(viewSingleNews(ele.id));
              }}>
              <ThemeCard
                cardSubTitle={truncate(ele.title, 40)}
                cardImg={{ src: ele.urlToImage }}
                cardText={ele.description}
                publishedAt={ele.publishedAt}
              />
            </Col>
          ))}
        </Row>
      );
    } else {
      return (
        <Row className="mt-5">
          {[...Array(6)].map((ele) => (
            <Col lg={4} className="mb-4" key={randomNumber()}>
              <Card>
                <CardHeader>
                  <Skeleton height={250} />
                </CardHeader>
                <CardBody>
                  <Skeleton count={3} />
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
      );
    }
  };

  return (
    <Container className="my-5">
      <div className="d-flex align-items-center">
        <h2 className="font-weight-bold display-4 mb-3">Latest News</h2>
        <h4
          className="text-success ml-auto pointer"
          onClick={() => {
            history.push("/news");
          }}>
          View All <Icon.ArrowRight />
        </h4>
      </div>
      {renderNews()}
    </Container>
  );
};

export default LatestNews;
