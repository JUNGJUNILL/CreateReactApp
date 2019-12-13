import React from 'react';
import queryString from 'query-string';

const About = ({location,match}) => {
                        //match : 이 객체는 어떤 라우트에 매칭되었는지에 정보가 있고
                        //params(/about/:name)정보를 가지고 있다.
                        /*
                        match
                            {path: "/about/:name", url: "/about/good", isExact: true, params: {…}}
                            isExact: true
                            params: {name: "good"}
                            path: "/about/:name"
                            url: "/about/good"
                            __proto__: Object 
                        */

                        //location : 이 객체는 현재 경로에 대한 정보를 지니고 있고 
                        //URL 쿼리(/about?foo=bar 형식)정보도 가지고 있습니다. 
         
                const query = queryString.parse(location.search); 
                console.log('query--> ' , query); //http://localhost:3000/about?foo=bar
                                                  //{foo:"bar"}
                const detail = query.foo == 'bar'; 
    return (
        <div>
            <h2>About {match.params.name}</h2>
            {detail && 'detail: barbar'}
        </div>
    );
};

export default About;