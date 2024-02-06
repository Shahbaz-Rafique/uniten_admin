import React, { useState } from "react";
import moment from "moment-timezone";
import Datetime from "react-datetime";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { Col, Row, Card, Form, Button, InputGroup } from '@themesberg/react-bootstrap';

export const GeneralInfoForm = () => {
  const [courseInfo, setCourseInfo] = useState({
    courseName: "",
    category: "",
    aboutCourse: "",
    relatedCourses: [""],
    whatYouLearn: [""],
    entryRequirements: [""],
    categoryImage: null
  });

  const handleChange = (field, value) => {
    setCourseInfo({ ...courseInfo, [field]: value });
  };

  const handleArrayChange = (field, index, value) => {
    const newArray = [...courseInfo[field]];
    newArray[index] = value;
    setCourseInfo({ ...courseInfo, [field]: newArray });
  };

  const handleAddField = (field) => {
    setCourseInfo({ ...courseInfo, [field]: [...courseInfo[field], ""] });
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   console.log(courseInfo);

  //   try {
  //     const response = await fetch("http://localhost:5001/addcourse", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(courseInfo),
  //     });

  //     if (response.ok) {

  //       window.alert('Course saved successfully');
  //       console.log("Course saved successfully");
  //     } else {
  //       window.alert('Failed to save');

  //       console.error("Failed to save course");
  //     }
  //   } catch (error) {
  //     console.error("Error during save:", error);
  //   }
  // };



  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(courseInfo);

    try {
      const formData = new FormData();

      // Append text data to the form data
      formData.append("courseName", courseInfo.courseName);
      formData.append("category", courseInfo.category);
      formData.append("aboutCourse", courseInfo.aboutCourse);

      // Append array data to the form data
      courseInfo.relatedCourses.forEach((relatedCourse, index) => {
        formData.append(`relatedCourses[${index}]`, relatedCourse);
      });

      courseInfo.whatYouLearn.forEach((learn, index) => {
        formData.append(`whatYouLearn[${index}]`, learn);
      });

      courseInfo.entryRequirements.forEach((entry, index) => {
        formData.append(`entryRequirements[${index}]`, entry);
      });

      // Append file data to the form data
      formData.append("categoryImage", courseInfo.categoryImage);
console.log(formData);
      const response = await fetch("https://fresh-tropical-colony.glitch.me/addcourse", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        window.alert("Course saved successfully");
        console.log("Course saved successfully");
      } else {
        window.alert("Failed to save");
        console.error("Failed to save course");
      }
    } catch (error) {
      console.error("Error during save:", error);
    }
  };

  const handleCategoryImageChange = (e) => {
    const file = e.target.files[0];
    setCourseInfo({ ...courseInfo, categoryImage: file });
  };




  return (
    <Card border="light" className="bg-white shadow-sm mb-4">
      <Card.Body>
        <h5 className="mb-4">Course Information</h5>
        <Form onSubmit={handleSubmit}>
          <Row>
            <Col md={6} className="mb-3">
              <Form.Group id="courseName">
                <Form.Label>Course Name</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Enter the course name"
                  value={courseInfo.courseName}
                  onChange={(e) => handleChange("courseName", e.target.value)}
                />
              </Form.Group>
            </Col>
            <Col md={6} className="mb-3">
              <Form.Group id="category">
                <Form.Label>Category</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Enter the category"
                  value={courseInfo.category}
                  onChange={(e) => handleChange("category", e.target.value)}
                />
              </Form.Group>
            </Col>

          </Row>
          <Row className="align-items-center">

            <Col md={6} className="mb-3">
              <Form.Group id="categoryImage">
                <Form.Label>Category Image</Form.Label>
                <Form.Control
                  required
                  type="file"
                  onChange={handleCategoryImageChange}
                />
              </Form.Group>
            </Col>
            <Col md={6} className="mb-3">
              <Form.Group id="aboutCourse">
                <Form.Label>About Course</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Provide information about the course"
                  value={courseInfo.aboutCourse}
                  onChange={(e) => handleChange("aboutCourse", e.target.value)}
                />
              </Form.Group>
            </Col>

          </Row>
          <Row>
            <Col md={6} className="mb-3">
              <Form.Group id="relatedCourses">
                <Form.Label>Related Courses</Form.Label>
                {courseInfo.relatedCourses.map((relatedCourse, index) => (
                  <Form.Control
                    key={index}
                    className="mt-2"
                    type="text"
                    placeholder={`Enter related course #${index + 1}`}
                    value={relatedCourse}
                    onChange={(e) => handleArrayChange("relatedCourses", index, e.target.value)}
                  />
                ))}
                <Button className="mt-2" variant="primary" onClick={() => handleAddField("relatedCourses")}>Add Related Course</Button>
              </Form.Group>
            </Col>
            <Col md={6} className="mb-3">
              <Form.Group id="whatYouLearn">
                <Form.Label>What You'll Learn</Form.Label>
                {courseInfo.whatYouLearn.map((learn, index) => (
                  <Form.Control
                    key={index}
                    as="textarea"
                    className="mt-2"
                    rows={3}
                    placeholder={`Enter what students will learn #${index + 1}`}
                    value={learn}
                    onChange={(e) => handleArrayChange("whatYouLearn", index, e.target.value)}
                  />
                ))}
                <Button className="mt-2" variant="primary" onClick={() => handleAddField("whatYouLearn")}>Add What You'll Learn</Button>
              </Form.Group>
            </Col>





          </Row>
          <Row>
            <Col md={6} className="mb-3">
              <Form.Group id="entryRequirements">
                <Form.Label>Entry Requirements</Form.Label>
                {courseInfo.entryRequirements.map((entry, index) => (
                  <Form.Control
                    key={index}
                    type="text"
                    className="mt-2"

                    placeholder={`Enter entry requirement #${index + 1}`}
                    value={entry}
                    onChange={(e) => handleArrayChange("entryRequirements", index, e.target.value)}
                  />
                ))}
                <Button
                  className="mt-2"
                  variant="primary" onClick={() => handleAddField("entryRequirements")}>Add Entry Requirement</Button>
              </Form.Group>
            </Col>

          </Row>

          <div className="mt-3">
            <Button variant="primary" onClick={handleSubmit} type="submit">Save Course</Button>
          </div>
        </Form>
      </Card.Body>
    </Card>
  );
};
