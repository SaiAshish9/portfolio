import React from "react";
import { Desc } from "screens/dsa/styles";

import { Container } from "./styles";

const DSA = () => {
  return (
    <Container>
      <Desc>
        A <b>data structure</b> is a way of organising data so that it can be
        used efficiently from temporary or main memory of the computer and
        various operations can be performed on it. It is a collection of data
        types <br /> <br />
        There are two types of data structures: <b>primitive</b> and{" "}
        <b>non-primitive.</b>
        <br />
        <br />
        <b>Data Type:</b>
        <br />
        <br />
        Data types are used to identify the type of data a memory location can
        hold and the associated operations of handling it. Types: primitive and non-primitive
        <br />
        <br />
        <b>Database:</b>
        <br />
        <br />A database is an organized collection of data to access and manage
        data easily from permanent memory (files, HDD ,etc) . Relational
        database ( tables ) ( Mysql, Postgres ) (ACID (Atomicity Consistency
        Isolation Durability) property) and non-relational database ( json,xml
        files,etc ) ( MongoDB, Redis, Cassandra DB ) (BASE (Basically Available,
        Soft state, Eventually consistent) property) are it's types.
        <br />
        <br />
        <b>Data Warehouse:</b>
        <br />
        <br />
        It's the collection of data from various data sources which forms the
        main component of business.It makes use of sql queries and application
        log files.It is also used to perform queries on large amounts of data.
        It involves the process of extraction, loading, and transformation for
        providing the data for analysis. #collection
        <br />
        <br />
        <b>Data Mining:</b>
        <br />
        <br />
        Data mining is considered as a process of extracting data from large
        data sets with the help of patterns. #extraction
        <br />
        <br />
        <b>Big Data:</b>
        <br />
        <br />
        Big Data basically refers to the data which is in large volume and has
        complex data sets(Structured, semi-structured, or non-structured) which
        cannot be processed by traditional data processing software and
        databases. Various operations like analysis, manipulation, changes, etc
        are performed on data and then it is used by companies for intelligent
        decision making. e.g.Apache Hadoop.
      </Desc>
    </Container>
  );
};

export default DSA;
