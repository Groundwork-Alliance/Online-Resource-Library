const express = require("express");
const App = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const db = require("./config");
const fs = require("fs");
const path = require("path");
const { json } = require("body-parser");

App.use(cors());
App.use(bodyParser.json());

App.get("/", (req, res) => {
  let qu = "SHOW TABLES";
  db.query(qu, (err, result) => {
    if (err) {
      console.log("err");
    } else {
      if (result.length === 0) {
        res.send("No tables are available currently!");
      } else {
        res.send(result);
      }
    }
  });
});

App.post("/signup", (req, res) => {
  let { userName, userEmail, password } = req.body;
  let query = `SELECT * FROM orldb.user`;
  // let query = `INSERT INTO user(name,email,password,role) VALUES("${userName}","${userEmail}","${password}","admin")`;
  db.query(query, (err, result) => {
    if (err) {
      console.log("error while checking the user database for null value", err);
    } else {
      if (result.length == 0) {
        let query = `INSERT INTO orldb.user(name,email,password,role) VALUES("${userName}","${userEmail}","${password}","admin")`;
        db.query(query, (err, result) => {
          if (err) {
            console.log(
              "error whhile signup as admin when table is empty: ",
              err
            );
          } else {
            res.json(result);
          }
        });
      } else {
        let query = `INSERT INTO orldb.user(name,email,password,role) VALUES("${userName}","${userEmail}","${password}","member")`;
        db.query(query, (err, result) => {
          if (err) {
            console.log(
              "error whhile signup as admin when table is empty: ",
              err
            );
          } else {
            res.json(result);
          }
        });
      }
    }
  });
});
App.post("/login", (req, res) => {
  let { userEmail, password } = req.body;
  let query = `SELECT * FROM orldb.user WHERE email="${userEmail}"AND password="${password}"`;
  db.query(query, (err, result) => {
    if (err) {
      console.log("error while login", err);
    } else {
      res.json(result);
    }
  });
});

App.post("/addtutorial", (req, res) => {
  let { tutorialName, tutorialsUrl, courtesy, ebook, test, active } = req.body;
  let query = `INSERT INTO orldb.tutorial(name,url,courtesy,ebook,test_name,active) VALUES("${tutorialName}","${tutorialsUrl}","${courtesy}","${ebook}","${test}","${active}")`;
  db.query(query, (err, result) => {
    if (err) {
      console.log("Error while adding tutorials-->", err);
    } else res.json(result);
  });
});
App.post("/deletetutorial", (req, res) => {
  let { id } = req.body;
  let query = `DELETE FROM orldb.tutorial WHERE tutorial_id=${id}`;
  db.query(query, (err, result) => {
    if (err) {
      console.log("err While deleting the tutorial", err);
    } else {
      res.json(result);
    }
  });
});
App.post("/updatetutorial", (req, res) => {
  let { id, tutorialName, tutorialsUrl, courtesy, ebook, test, active } =
    req.body;
  let query = `UPDATE orldb.tutorial SET name = "${tutorialName}", url = "${tutorialsUrl}", courtesy="${courtesy}", ebook="${ebook}",test_name="${test}", active="${active}" WHERE tutorial_id="${id}"`;
  db.query(query, (err, result) => {
    if (err) {
      console.log("error while updating the tutorial: ", err);
    } else {
      res.json(result);
    }
  });
});
App.post("/gettutorial", (req, res) => {
  let { id } = req.body;
  let query = `SELECT * FROM orldb.tutorial WHERE tutorial_id=${id}`;
  db.query(query, (err, result) => {
    if (err) {
      console.log("err while getting the particular tutorial");
    } else {
      res.json(result);
    }
  });
});
App.get("/allturorials", (req, res) => {
  let query = `SELECT * FROM orldb.tutorial`;
  db.query(query, (err, result) => {
    if (err) {
      console.log("Error while adding tutorials-->", err);
    } else res.json(result);
  });
});
App.get("/allturorialsontutorialspage", (req, res) => {
  let query = `SELECT * FROM orldb.tutorial WHERE active="yes"`;
  db.query(query, (err, result) => {
    if (err) {
      console.log("Error while adding tutorials-->", err);
    } else res.json(result);
  });
});
App.get("/allusers", (req, res) => {
  let query = `SELECT * FROM orldb.user WHERE role ="member"`;
  db.query(query, (err, result) => {
    if (err) {
      console.log("err while getting all the members:", err);
    } else {
      res.json(result);
    }
  });
});
App.post("/deleteuser", (req, res) => {
  let { id } = req.body;
  let query = `DELETE FROM orldb.user WHERE user_id=${id}`;
  db.query(query, (err, result) => {
    if (err) {
      console.log("err While deleting the tutorial", err);
    } else {
      res.json(result);
    }
  });
});
App.post("/getuser", (req, res) => {
  let { id } = req.body;
  let query = `SELECT * FROM orldb.user WHERE user_id=${id}`;
  db.query(query, (err, result) => {
    if (err) {
      console.log("err While deleting the tutorial", err);
    } else {
      res.json(result);
    }
  });
});
App.post("/updateuser", (req, res) => {
  let { id, role } = req.body;
  let query = `UPDATE orldb.user SET role = "${role}" WHERE user_id="${id}"`;
  db.query(query, (err, result) => {
    if (err) {
      console.log("error while updating the tutorial: ", err);
    } else {
      res.json(result);
      console.log(result);
    }
  });
});

App.get("/alladmins", (req, res) => {
  let query = `SELECT * FROM orldb.user WHERE role ="admin"`;
  db.query(query, (err, result) => {
    if (err) {
      console.log("err while getting all the members:", err);
    } else {
      res.json(result);
    }
  });
});

App.post("/getalltests", (req, res) => {
  let dirpath = path.join(__dirname, "tests");
  fs.readdir(dirpath, (err, data) => {
    if (err) {
      console.log("error while scanning for test files: ", err);
    } else {
      res.json(data);
    }
  });
});

App.post("/gettest", (req, res) => {
  let { filename } = req.body;
  let query = `SELECT * FROM orldb.${filename}`;
  console.log(filename)
  db.query(query, (err, result) => {
    if (err) {
      console.log(`err while getting test data from ${filename} table.`, err);
    } else {
      res.json(result);
    }
  });

});

App.listen(8080, () => {
  console.log("server started in the backend");
});
