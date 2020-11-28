import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Container,
  Input,
  InputGroup,
  InputGroupAddon,
  Pagination,
  PaginationItem,
  PaginationLink,
  Row,
} from "reactstrap";
import {
  filterWithCategory,
  getCategories,
  searchArticle,
  viewSingleNews,
} from "../redux/news/newsActions";
import ThemeBreadCrumbs from "../components/shared/themeBreadCrumbs";
import { history } from "../history";
import ThemeCard from "../components/shared/themeCard";
import { randomNumber, toTop, truncate } from "../utility/commonFunctions";
import { getNews } from "../redux/news/newsActions";
import ThemeFlatPicker from "../components/shared/themeFlatPicker";
import Select from "react-select";
import * as Icon from "react-feather";
import queryString from "query-string";
import { filterWithDate } from "./../redux/news/newsActions";
import moment from "moment";
import { Skeleton } from "react-loading-skeleton";

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

const AllNews = ({ location }) => {
  const dispatch = useDispatch();
  const { news } = useSelector((state) => state);
  const [dateFrom, setDateFrom] = useState(null);
  const [dateTo, setDateTo] = useState(null);
  const [categories, setCategories] = useState([]);
  const [searchKey, setSearchKey] = useState(null);
  const [orderBy, setOrderBy] = useState("asc");

  const getPageNum = () => {
    return +queryString.parse(location.search)._page;
  };

  useEffect(() => {
    toTop();
    dispatch(getNews({ _page: getPageNum() || 1 }));
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
    } else {
      return (
        <Row className="mt-5">
          {[...Array(9)].map((ele) => (
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

  const renderFilter = () => {
    return (
      <Row className="align-items-end">
        <Col lg={2} className="mb-3">
          <h5 className="text-bold-500">
            From{" "}
            <small
              className="text-success pointer"
              onClick={() => {
                setDateFrom(null);
                setDateTo(null);
                dispatch(getNews({ _page: 1, _order: orderBy }));
              }}>
              <small className="mx-1">Clear </small>
              <Icon.RefreshCw size={12} />
            </small>
          </h5>
          <ThemeFlatPicker
            date={dateFrom}
            setDate={(e) => {
              handleDateFrom(e[0]);
            }}
          />
        </Col>

        <Col lg={2} className="mb-3">
          <h5 className="text-bold-500">To</h5>
          {Boolean(dateFrom) && (
            <div>
              <ThemeFlatPicker
                date={dateTo}
                setDate={(e) => {
                  handleDateTo(e[0]);
                }}
              />
            </div>
          )}
          {!Boolean(dateFrom) && (
            <div>
              <ThemeFlatPicker date={dateTo} disabled={true} />
            </div>
          )}
        </Col>

        {Boolean(categories.length) && (
          <Col lg={3} className="mb-3">
            <h5 className="text-bold-500">Category</h5>

            <Select
              isClearable={true}
              options={categories}
              onChange={(e) => {
                dispatch(filterWithCategory(e?.value || null));
              }}
            />
          </Col>
        )}
        <Col lg={3} className="mb-3">
          <h5 className="text-bold-500">Search</h5>
          <InputGroup>
            <Input
              placeholder="Search Services..."
              onChange={(e) => {
                setSearchKey(e.currentTarget.value);
              }}
            />
            <InputGroupAddon addonType="append">
              <Button
                color="success"
                onClick={() => {
                  dispatch(searchArticle(searchKey));
                }}>
                <Icon.Search size={16} />
              </Button>
            </InputGroupAddon>
          </InputGroup>
        </Col>
        <Col lg={2} className="mb-3">
          <h5
            className="text-success text-center pointer"
            onClick={() => {
              dispatch(getNews({ _page_: getPageNum(), _order: orderBy }));
              setOrderBy(orderBy === "asc" ? "desc" : "asc");
            }}>
            <span className="mx-3">Sort By</span>
            <Icon.Repeat size={16} style={{ transform: "rotate(90deg)" }} />
          </h5>
        </Col>
      </Row>
    );
  };

  const handleDateFrom = (date) => {
    setDateFrom(date);
  };
  const handleDateTo = (date) => {
    setDateTo(date);
    console.log({
      from: moment(dateFrom).format(),
      to: moment(dateTo).format(),
    });
    dispatch(
      filterWithDate({
        from: moment(dateFrom).format(),
        to: moment(dateTo).format(),
      })
    );
  };

  const handlePagination = (page) => {
    console.log(orderBy);
    history.push(`/news?_page=${page}`);
    dispatch(getNews({ _page: page, _order: orderBy }));
  };

  return (
    <React.Fragment>
      <Container>
        {/* Bread Crumbs */}
        <ThemeBreadCrumbs items={breadCrumbItems} />
        {/* Filters */}
        {renderFilter()}
        {/* News */}
        {renderAllNews()}
        {/* Pagination */}
        <Pagination size="lg">
          <PaginationItem disabled={getPageNum() === 1}>
            <PaginationLink
              previous
              onClick={() => {
                handlePagination(getPageNum() - 1);
              }}
            />
          </PaginationItem>
          <PaginationItem
            active={getPageNum() === 1 || isNaN(getPageNum())}
            onClick={() => {
              handlePagination(1);
            }}>
            <PaginationLink>1</PaginationLink>
          </PaginationItem>
          <PaginationItem
            active={getPageNum() === 2}
            onClick={() => {
              handlePagination(2);
            }}>
            <PaginationLink>2</PaginationLink>
          </PaginationItem>
          <PaginationItem
            active={getPageNum() === 3}
            onClick={() => {
              handlePagination(3);
            }}>
            <PaginationLink>3</PaginationLink>
          </PaginationItem>
          <PaginationItem disabled={getPageNum() === 3}>
            <PaginationLink
              next
              onClick={() => {
                handlePagination(getPageNum() + 1);
              }}
            />
          </PaginationItem>
        </Pagination>
      </Container>
    </React.Fragment>
  );
};

export default AllNews;
