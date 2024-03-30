import { Helmet } from "react-helmet-async";

const Blog = () => {
  return (
    <div className="h-screen">
      <Helmet>
        <title>FoodHero | Blog</title>
      </Helmet>
      {/* <div className="h-[100px] "></div> */}

      {/* <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" checked="checked" />
        <div className="collapse-title text-xl font-medium">
          Click to open this one and close others
        </div>
        <div className="collapse-content">
          <p>hello</p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
          Click to open this one and close others
        </div>
        <div className="collapse-content">
          <p>hello</p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
          Click to open this one and close others
        </div>
        <div className="collapse-content">
          <p>hello</p>
        </div>
      </div> */}

      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: "url( https://i.ibb.co/LN42P45/blog.jpg )",
        }}
      >
        <div className="hero-overlay lg:w-2/3 bg-opacity-80">
          <div className="mt-36 text-white collapse collapse-arrow ">
            <input type="radio" name="my-accordion-2" checked="checked" />
            <div className="collapse-title text-xl font-medium">
              What is One way data binding?
            </div>
            <div className="collapse-content">
              <p>
                One-way data binding is a concept in web development and user
                interface design that refers to the synchronization of data in a
                single direction, typically from a data source to a UI element.
                In one-way data binding, changes in the data source are
                reflected in the UI, but not vice versa. This means that when
                the data changes, the UI is updated to reflect those changes,
                but any updates or interactions in the UI do not affect the
                underlying data.
              </p>
            </div>
          </div>
          <div className="text-white collapse collapse-arrow ">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium">
              What is NPM in node.js?
            </div>
            <div className="collapse-content">
              <p>
                NPM stands for Node Package Manager. It is a package manager for
                Node.js, which is a runtime environment for executing JavaScript
                code on the server-side. NPM is one of the most popular package
                managers in the JavaScript ecosystem and is used for managing
                and distributing packages or libraries of JavaScript code.
              </p>
            </div>
          </div>
          <div className="text-white collapse collapse-arrow ">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium">
              Different between Mongodb database vs mySQL database.
            </div>
            <div className="collapse-content">
              <p>
                MongoDB and MySQL are both popular database management systems,
                but they have several key differences in terms of data models,
                use cases, and design philosophies. Here are some of the main
                differences between MongoDB and MySQL: Data Model: MongoDB is a
                NoSQL database that uses a document-oriented data model. It
                stores data in flexible, semi-structured BSON (Binary JSON)
                documents, allowing you to store data in a way that can evolve
                over time without a rigid schema. MySQL is a relational database
                management system (RDBMS) that uses a tabular, structured data
                model with predefined schemas. It enforces a fixed schema with
                tables, rows, and columns. Schema Flexibility: MongoDB offers
                schema flexibility, allowing you to add or remove fields from
                documents without affecting the entire data structure. This
                makes it suitable for applications where data structures can
                change frequently. MySQL enforces a rigid schema, and any
                changes to the schema require migrations and careful planning.
                Query Language: MongoDB uses a query language similar to
                JavaScript called the MongoDB Query Language (MQL). It supports
                querying by document fields, geospatial queries, and other
                NoSQL-specific features. MySQL uses SQL (Structured Query
                Language) for data retrieval and manipulation, which is a
                well-established and widely used language for working with
                relational databases. Transactions: MySQL supports ACID
                (Atomicity, Consistency, Isolation, Durability) transactions,
                making it a good choice for applications that require strict
                data integrity and consistency. MongoDB supports multi-document
                transactions, but it is generally considered less suitable for
                applications that require complex transactional operations
                compared to traditional relational databases like MySQL.
                Scaling: MongoDB is designed to scale horizontally, which means
                you can distribute your data across multiple servers and handle
                large amounts of data and high traffic. It is well-suited for
                applications with big data needs and where scalability is
                crucial. MySQL traditionally relies on vertical scaling, which
                involves upgrading hardware to handle increased load. However,
                MySQL also has solutions for horizontal scaling, such as MySQL
                Cluster and sharding. Use Cases: MongoDB is often chosen for
                applications with rapidly evolving data requirements,
                unstructured or semi-structured data, and where horizontal
                scalability is essential. It is commonly used in web and mobile
                applications, content management systems, and real-time
                analytics. MySQL is a solid choice for applications with
                well-defined, structured data, complex queries, and
                transactions. It is widely used in e-commerce, financial
                systems, and traditional relational database applications.
                Ultimately, the choice between MongoDB and MySQL depends on the
                specific requirements of your project. Each has its own
                strengths and weaknesses, and the decision should be based on
                factors like data structure, scalability needs, and the nature
                of your application. In some cases, a combination of both
                databases may be used within the same application to address
                different data storage needs.
              </p>
            </div>
          </div>
        </div>
        <div className="hero-content text-center text-neutral-content"></div>
      </div>
    </div>
  );
};

export default Blog;
