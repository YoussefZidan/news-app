import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Button,
  Col,
  Container,
  Input,
  InputGroup,
  InputGroupAddon,
  Row,
} from "reactstrap";
import { getCategories, viewSingleNews } from "../../redux/news/newsActions";
import ThemeBreadCrumbs from "./../shared/themeBreadCrumbs";
import { history } from "./../../history";
import ThemeCard from "./../shared/themeCard";
import { truncate } from "../../utility/commonFunctions";
import { getNews } from "./../../redux/news/newsActions";
import ThemeFlatPicker from "./../shared/themeFlatPicker";
import Select from "react-select";
import * as Icon from "react-feather";

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
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    dispatch(getNews());
    dispatch(getCategories());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (news.categories) {
      let cats = [];
      news.categories.forEach((ele) => {
        cats.push({
          value: ele.id,
          label: ele.name,
        });
      });

      setCategories(cats);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [news.categories]);

  const renderAllNews = () => {
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
    }
  };

  const renderFilter = () => {
    return (
      <Row className="align-items-end">
        <Col lg={2}>
          <h5 className="text-bold-500">From</h5>
          <ThemeFlatPicker date={dateFrom} setDate={handleDateFrom} />
        </Col>
        <Col lg={2}>
          <h5 className="text-bold-500">To</h5>
          <ThemeFlatPicker date={dateTo} setDate={handleDateTo} />
        </Col>
        {Boolean(categories.length) && (
          <Col lg={3}>
            <h5 className="text-bold-500">Category</h5>

            <Select isClearable={true} options={categories} />
          </Col>
        )}
        <Col lg={3}>
          <h5 className="text-bold-500">Search</h5>
          <InputGroup>
            <Input placeholder="Search Services..." />
            <InputGroupAddon addonType="append">
              <Button color="success">
                <Icon.Search size={16} />
              </Button>
            </InputGroupAddon>
          </InputGroup>
        </Col>
        <Col lg={2}>
          <h5 className="text-success text-center pointer">
            <span className="mx-3">Sort By</span>
            <Icon.Repeat size={16} style={{ transform: "rotate(90deg)" }} />
          </h5>
        </Col>
      </Row>
    );
  };

  const handleDateFrom = (date) => {
    console.log(date);
    setDateFrom(date);
  };
  const handleDateTo = (date) => {
    console.log(date);
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
