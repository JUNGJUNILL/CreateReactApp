import React from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';

const Breadcrumb01 = (props) => {
    return (
      <div>
        <Breadcrumb>
          <BreadcrumbItem active>Home</BreadcrumbItem>
        </Breadcrumb>
        <Breadcrumb>
          <BreadcrumbItem><a href="#">Home</a></BreadcrumbItem>
          <BreadcrumbItem active>Library</BreadcrumbItem>
        </Breadcrumb>
        <Breadcrumb>
          <BreadcrumbItem><a href="#">Home</a></BreadcrumbItem>
          <BreadcrumbItem><a href="#">Library</a></BreadcrumbItem>
          <BreadcrumbItem active>home</BreadcrumbItem>
        </Breadcrumb>
      </div>
    );
  };
  
  export default Breadcrumb01;