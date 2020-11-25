import React, { useEffect } from "react";
import {
  Card,
  CardBody,
  CardHeader,
  CardSubtitle,
  CardTitle,
  Col,
  Container,
  Row,
} from "reactstrap";
import LatestNewsCard from "./../components/shared/latestNewsCard";
import { randomNumber, toTop } from "./../utility/commonFunctions";
import { useDispatch, useSelector } from "react-redux";
import { getRelatedTopics, viewSingleNews } from "./../redux/news/newsActions";
import ThemeBreadCrumbs from "../components/shared/themeBreadCrumbs";
import Skeleton from "react-loading-skeleton";

const Details = ({ match }) => {
  const { news } = useSelector((state) => state);
  const dispatch = useDispatch();
  const cardImgStyle = {
    height: "400px",
    backgroundImage: `url(${news?.singleNews?.urlToImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center center",
  };

  const breadCrumbItems = [
    {
      label: "Home",
      to: "/home",
      active: false,
    },
    {
      label: "News",
      to: "/news",
      active: false,
    },
    {
      label: "News Details",
      to: `/details/${match.params.id}`,
      active: true,
    },
  ];

  useEffect(() => {
    toTop();
    dispatch(viewSingleNews(+match.params.id));
    dispatch(getRelatedTopics());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const renderSingleNews = () => {
    if (news.singleNews) {
      return (
        <Card>
          {/* Card Img */}
          <div style={cardImgStyle}></div>
          <CardBody>
            <CardSubtitle tag="h6" className="mt-2 mb-2 text-muted">
              Category Name
            </CardSubtitle>
            <CardTitle tag="h2" className="font-weight-bold">
              {news.singleNews.title}
            </CardTitle>
            <p className="text-muted mb-3">{news.singleNews.content}</p>
          </CardBody>
        </Card>
      );
    } else {
      return (
        <Card>
          <CardHeader>
            <Skeleton height={350} />
          </CardHeader>
          <CardBody>
            <CardSubtitle tag="h6" className="mt-2 mb-2 text-muted">
              <Skeleton width={150} />
            </CardSubtitle>
            <CardTitle tag="h1" className="font-weight-bold">
              <Skeleton />
            </CardTitle>
            <Skeleton count={20} />
          </CardBody>
        </Card>
      );
    }
  };

  const renderRelatedTopics = () => {
    if (news.relatedTopics) {
      return (
        <Row>
          {news.relatedTopics.map((ele) => (
            <Col lg={4} key={ele.id} className="mb-3">
              <LatestNewsCard
                subTitle={ele.subTitle}
                title={ele.title}
                btnLabel={ele.btnLabel}
                img={ele.img}
              />
            </Col>
          ))}
        </Row>
      );
    } else {
      return (
        <Row className="mt-5">
          {[...Array(3)].map((ele) => (
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
    <Container className="pb-5">
      {/* Bread Crumbs */}
      <ThemeBreadCrumbs items={breadCrumbItems} />

      {/* News Details */}
      <h2 className="display-4 font-weight-bold mb-4">News Details</h2>
      {renderSingleNews()}

      {/* Related Topics */}
      <h2 className="display-4 font-weight-bold mb-4 mt-5">Related Topics</h2>
      {renderRelatedTopics()}
    </Container>
  );
};

export default Details;
