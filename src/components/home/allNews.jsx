import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Col, Container, Row } from "reactstrap";
import { viewSingleNews } from "../../redux/news/newsActions";
import ThemeBreadCrumbs from "./../shared/themeBreadCrumbs";
import { history } from "./../../history";
import ThemeCard from "./../shared/themeCard";
import { truncate } from "../../utility/commonFunctions";
import { getNews } from "./../../redux/news/newsActions";
import ThemeFlatPicker from "./../shared/themeFlatPicker";
import Select from "react-select";

const breadCrumbItems = [
  {
    label: "Home",
    to: "/home",
    active: false,
  },
  {
    label: "News",
    to: "/news",
    active: true,
  },
];

const AllNews = () => {
  const dispatch = useDispatch();
  const { news } = useSelector((state) => state);
  const [dateFrom, setDateFrom] = useState(new Date());
  const [dateTo, setDateTo] = useState(new Date());

  useEffect(() => {
    if (!news.articles) dispatch(getNews());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const renderAllNews = () => {
    if (news.articles) {
      return (
        <Row className="mt-5">
          {news.articles.map(
            (ele) =>
              ele.showOnHomepage && (
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
              )
          )}
        </Row>
      );
    }
  };

  const renderFilter = () => {
    return (
      <Row>
        <Col lg={3}>
          <h5 className="text-bold-500">From</h5>
          <ThemeFlatPicker date={dateFrom} setDate={handleDateFrom} />
        </Col>
        <Col lg={3}>
          <h5 className="text-bold-500">To</h5>
          <ThemeFlatPicker date={dateTo} setDate={handleDateTo} />
        </Col>
        <Col lg={3}>
          <h5 className="text-bold-500">Category</h5>
          <Select
            isClearable={true}
            options={[
              { value: "chocolate", label: "Chocolate" },
              { value: "strawberry", label: "Strawberry" },
              { value: "vanilla", label: "Vanilla" },
            ]}
          />
        </Col>
      </Row>
    );
  };

  const handleDateFrom = (date) => {
    setDateFrom(date);
  };
  const handleDateTo = (date) => {
    setDateTo(date);
  };
  return (
    <Container>
      {/* Bread Crumbs */}
      <ThemeBreadCrumbs items={breadCrumbItems} />
      {/* Filters */}
      {renderFilter()}
      {renderAllNews()}
    </Container>
  );
};

export default AllNews;
