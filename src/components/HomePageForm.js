import React, { useState } from "react";
import moment from "moment-timezone";
import Datetime from "react-datetime";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { Col, Row, Card, Form, Button, InputGroup } from '@themesberg/react-bootstrap';


export const HomePageForm = () => {

    const [Link, setLink] = useState();


    const handleSubmit = async () => {
        try {
            const response = await fetch('http://localhost:5001/edithomevideo', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ videoLink: Link }),
            });

            if (!response.ok) {
                throw new Error(`Error updating home video link: ${response.statusText}`);
            }
            else {
                window.alert('Link Updated');
            }

            return await response.json();
        } catch (error) {
            console.error('Error updating home video link:', error);
            throw error;
        }
    };


    const [title, setTitle] = useState('');
    const [file, setFile] = useState(null);
    const [subtitle, setSubtitle] = useState('');
    const [paragraph, setParagraph] = useState('');


    const [title1, setTitle1] = useState('');
    const [file1, setFile1] = useState(null);
    const [subtitle1, setSubtitle1] = useState('');
    const [paragraph1, setParagraph1] = useState('');

    const [Quote, setQuote] = useState('');
    const [file2, setFile2] = useState(null);
    const [Description, setDescription] = useState('');

    const [Quote1, setQuote1] = useState('');
    const [file3, setFile3] = useState(null);
    const [Description1, setDescription1] = useState('');

    const [title2, setTitle2] = useState('');

    const [description, setdescription] = useState('');

    const [VideoLink, setvideoLink] = useState('');

    const handleImageChange = (e) => {
        setFile(e.target.files[0]);







    };

    const handleImageChange1 = (e) => {
        setFile1(e.target.files[0]);

    };
    const handleImageChange2 = (e) => {
        setFile2(e.target.files[0]);

    };


    const handleImageChange3 = (e) => {
        setFile3(e.target.files[0]);

    };

    const handleSubmit1 = async (e) => {

        e.preventDefault();

        try {
            const formData = new FormData();
            formData.append('title', title);
            formData.append('Image', file);
            formData.append('subtitle', subtitle);
            formData.append('paragraph', paragraph);


            const response = await fetch('http://localhost:5001/addScholar', {
                method: 'POST',
                body: formData,
            });

            if (response.ok) {
                const data = await response.json();
                window.alert('Added Successfully');
                console.log(data.message); // Log success message
                // Reset form fields or redirect to another page as needed
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };


    const handleSubmit2 = async (e) => {

        e.preventDefault();

        try {
            const formData = new FormData();
            formData.append('title1', title1);
            formData.append('Image', file1);
            formData.append('subtitle1', subtitle1);
            formData.append('paragraph1', paragraph1);


            const response = await fetch('http://localhost:5001/addcampuslife', {
                method: 'POST',
                body: formData,
            });

            if (response.ok) {
                const data = await response.json();
                console.log(data.message); // Log success message
                window.alert('added successfully');
                // Reset form fields or redirect to another page as needed
            }
        } catch (error) {

            window.alert(error)
            console.error('Error:', error);
        }
    };

    const handleSubmit3 = async (e) => {

        e.preventDefault();

        try {
            const formData = new FormData();
            formData.append('Quote', Quote);
            formData.append('Image', file2);
            formData.append('Description', Description);


            const response = await fetch('http://localhost:5001/addgraduate', {
                method: 'POST',
                body: formData,
            });

            if (response.ok) {
                const data = await response.json();
                console.log(data.message); // Log success message
                window.alert('added successfully');
                // Reset form fields or redirect to another page as needed
            }
        } catch (error) {

            window.alert(error)
            console.error('Error:', error);
        }
    };


    const handleSubmit4 = async (e) => {

        e.preventDefault();

        try {
            const formData = new FormData();
            formData.append('Quote', Quote1);
            formData.append('Image', file3);
            formData.append('Description', Description1);


            const response = await fetch('http://localhost:5001/addEducator', {
                method: 'POST',
                body: formData,
            });

            if (response.ok) {
                const data = await response.json();
                console.log(data.message); // Log success message
                window.alert('added successfully');
                // Reset form fields or redirect to another page as needed
            }
        } catch (error) {

            window.alert(error)
            console.error('Error:', error);
        }
    };



    const handleSubmit5 = async () => {
        try {
            const response = await fetch('http://localhost:5001/internationaloffice', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ videoLink: VideoLink, description, title: title2 }),
            });

            if (!response.ok) {
                throw new Error(`Error updating home video link: ${response.statusText}`);
            }
            else {
                window.alert('Data Updated');
            }

            return await response.json();
        } catch (error) {
            console.error('Error updating Data:', error);
            throw error;
        }
    };



    const [images, setImages] = useState([]);
    const [description3, setdescription3] = useState('');
    const [title4, setTitle4] = useState('');

    const handleImageChange4 = (event) => {
        const files = event.target.files;
        setImages([...images, ...files]);
    };


    const handleSubmit6 = async (e) => {

        e.preventDefault();

        try {
            const formData = new FormData();
            formData.append('title', title4);
            for (let i = 0; i < images.length; i++) {
                console.log(images);
                formData.append('images', images[i]);
            } formData.append('description', description3);


            const response = await fetch('http://localhost:5001/addpartners', {
                method: 'POST',
                body: formData,
            });

            if (response.ok) {
                const data = await response.json();
                console.log(data.message); // Log success message
                window.alert('added successfully');
                // Reset form fields or redirect to another page as needed
            }
        } catch (error) {

            window.alert(error)
            console.error('Error:', error);
        }
    };

    return (
        <>

            <Card border="light" className="bg-white shadow-sm mb-4">
                <Card.Body>
                    <h5 className="mb-4">Edit Home Video</h5>
                    <Form >
                        <Row>
                            <Col md={6} className="mb-3">
                                <Form.Group id="courseName">
                                    <Form.Label>Add Video Link </Form.Label>
                                    <Form.Control
                                        onChange={(event) => {
                                            setLink(event.target.value)
                                        }}
                                        required
                                        type="text"

                                        placeholder="Enter Link"
                                    />
                                </Form.Group>
                            </Col>

                        </Row>



                        <div className="mt-3">
                            <Button onClick={handleSubmit} variant="primary" type="submit">Update</Button>
                        </div>
                    </Form>
                </Card.Body>
            </Card>

            <Card border="light" className="bg-white shadow-sm mb-4">
                <Card.Body>
                    <h5 className="mb-4">Edit ScholarShips </h5>
                    <Form >
                        <Row>
                            <Col md={6} className="mb-3">
                                <Form.Group controlId="title">
                                    <Form.Label>Add Title</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter Title"
                                        value={title}
                                        onChange={(e) => setTitle(e.target.value)}
                                        required
                                    />
                                </Form.Group>
                            </Col>

                            <Col md={6} className="mb-3">
                                <Form.Group controlId="image">
                                    <Form.Label>Upload Image</Form.Label>
                                    <Form.Control
                                        type="file"
                                        accept="image/*"
                                        onChange={handleImageChange}
                                        required
                                    />
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row>
                            <Col md={6} className="mb-3">
                                <Form.Group controlId="subtitle">
                                    <Form.Label>Subtitle Title</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter Subtitle"
                                        value={subtitle}
                                        onChange={(e) => setSubtitle(e.target.value)}
                                        required
                                    />
                                </Form.Group>
                            </Col>

                            <Col md={6} className="mb-3">
                                <Form.Group controlId="paragraph">
                                    <Form.Label>Paragraph</Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        placeholder="Enter Paragraph"
                                        value={paragraph}
                                        onChange={(e) => setParagraph(e.target.value)}
                                        required
                                    />
                                </Form.Group>
                            </Col>
                        </Row>

                        <div className="mt-3">
                            <Button variant="primary" onClick={handleSubmit1} type="submit">
                                Add Scholarship
                            </Button>
                        </div>
                    </Form>
                </Card.Body>
            </Card>


            <Card border="light" className="bg-white shadow-sm mb-4">
                <Card.Body>
                    <h5 className="mb-4">Edit Campus Life </h5>
                    <Form >
                        <Row>
                            <Col md={6} className="mb-3">
                                <Form.Group controlId="title">
                                    <Form.Label>Add Title</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter Title"
                                        value={title1}
                                        onChange={(e) => setTitle1(e.target.value)}
                                        required
                                    />
                                </Form.Group>
                            </Col>

                            <Col md={6} className="mb-3">
                                <Form.Group controlId="image">
                                    <Form.Label>Upload Image</Form.Label>
                                    <Form.Control
                                        type="file"
                                        accept="image/*"
                                        onChange={handleImageChange1}
                                        required
                                    />
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row>
                            <Col md={6} className="mb-3">
                                <Form.Group controlId="subtitle">
                                    <Form.Label>Subtitle Title</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter Subtitle"
                                        value={subtitle1}
                                        onChange={(e) => setSubtitle1(e.target.value)}
                                        required
                                    />
                                </Form.Group>
                            </Col>

                            <Col md={6} className="mb-3">
                                <Form.Group controlId="paragraph">
                                    <Form.Label>Paragraph</Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        placeholder="Enter Paragraph"
                                        value={paragraph1}
                                        onChange={(e) => setParagraph1(e.target.value)}
                                        required
                                    />
                                </Form.Group>
                            </Col>
                        </Row>

                        <div className="mt-3">
                            <Button variant="primary" onClick={handleSubmit2} type="submit">
                                Add Campus Life
                            </Button>
                        </div>
                    </Form>
                </Card.Body>
            </Card>





            {/* <Card border="light" className="bg-white shadow-sm mb-4">
                <Card.Body>
                    <h5 className="mb-4">Edit Campus Life </h5>
                    <Form >
                        <Row>
                            <Col md={6} className="mb-3">
                                <Form.Group controlId="title">
                                    <Form.Label>Add Title</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter Title"
                                        value={title1}
                                        onChange={(e) => setTitle1(e.target.value)}
                                        required
                                    />
                                </Form.Group>
                            </Col>

                            <Col md={6} className="mb-3">
                                <Form.Group controlId="image">
                                    <Form.Label>Upload Image</Form.Label>
                                    <Form.Control
                                        type="file"
                                        accept="image/*"
                                        onChange={handleImageChange1}
                                        required
                                    />
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row>
                            <Col md={6} className="mb-3">
                                <Form.Group controlId="subtitle">
                                    <Form.Label>Subtitle Title</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter Subtitle"
                                        value={subtitle1}
                                        onChange={(e) => setSubtitle1(e.target.value)}
                                        required
                                    />
                                </Form.Group>
                            </Col>

                            <Col md={6} className="mb-3">
                                <Form.Group controlId="paragraph">
                                    <Form.Label>Paragraph</Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        placeholder="Enter Paragraph"
                                        value={paragraph1}
                                        onChange={(e) => setParagraph1(e.target.value)}
                                        required
                                    />
                                </Form.Group>
                            </Col>
                        </Row>

                        <div className="mt-3">
                            <Button variant="primary" onClick={handleSubmit2} type="submit">
                                Add Campus Life
                            </Button>
                        </div>
                    </Form>
                </Card.Body>
            </Card> */}


            <Card border="light" className="bg-white shadow-sm mb-4">
                <Card.Body>
                    <h5 className="mb-4">Add Graduates </h5>
                    <Form >
                        <Row>



                            <Col md={6} className="mb-3">
                                <Form.Group controlId="image">
                                    <Form.Label>Upload Image</Form.Label>
                                    <Form.Control
                                        type="file"
                                        accept="image/*"
                                        onChange={handleImageChange2}
                                        required
                                    />
                                </Form.Group>
                            </Col>
                            <Col md={6} className="mb-3">
                                <Form.Group controlId="title">
                                    <Form.Label>Add Quote</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter Title"
                                        value={Quote}
                                        onChange={(e) => setQuote(e.target.value)}
                                        required
                                    />
                                </Form.Group>
                            </Col>


                        </Row>

                        <Row>


                            <Col md={6} className="mb-3">
                                <Form.Group controlId="paragraph">
                                    <Form.Label>Description</Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        placeholder="Enter Paragraph"
                                        value={Description}
                                        onChange={(e) => setDescription(e.target.value)}
                                        required
                                    />
                                </Form.Group>
                            </Col>
                        </Row>

                        <div className="mt-3">
                            <Button variant="primary" onClick={handleSubmit3} type="submit">
                                Add Graduate
                            </Button>
                        </div>
                    </Form>
                </Card.Body>
            </Card>



            <Card border="light" className="bg-white shadow-sm mb-4">
                <Card.Body>
                    <h5 className="mb-4">Add Educators </h5>
                    <Form >
                        <Row>
                            <Col md={6} className="mb-3">
                                <Form.Group controlId="image">
                                    <Form.Label>Upload Image</Form.Label>
                                    <Form.Control
                                        type="file"
                                        accept="image/*"
                                        onChange={handleImageChange3}
                                        required
                                    />
                                </Form.Group>
                            </Col>
                            <Col md={6} className="mb-3">
                                <Form.Group controlId="title">
                                    <Form.Label>Add Quote</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter Title"
                                        value={Quote1}
                                        onChange={(e) => setQuote1(e.target.value)}
                                        required
                                    />
                                </Form.Group>
                            </Col>


                        </Row>

                        <Row>


                            <Col md={6} className="mb-3">
                                <Form.Group controlId="paragraph">
                                    <Form.Label>Description</Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        placeholder="Enter Paragraph"
                                        value={Description1}
                                        onChange={(e) => setDescription1(e.target.value)}
                                        required
                                    />
                                </Form.Group>
                            </Col>
                        </Row>

                        <div className="mt-3">
                            <Button variant="primary" onClick={handleSubmit4} type="submit">
                                Add Educator
                            </Button>
                        </div>
                    </Form>
                </Card.Body>
            </Card>




            <Card border="light" className="bg-white shadow-sm mb-4">
                <Card.Body>
                    <h5 className="mb-4">Edit International Office  </h5>
                    <Form >
                        <Row>
                            <Col md={6} className="mb-3">
                                <Form.Group controlId="image">
                                    <Form.Label>Upload Video Link</Form.Label>
                                    <Form.Control
                                        type="text"
                                        onChange={(e) => {
                                            setvideoLink(e.target.value)
                                        }}
                                        placeholder="Enter Link"
                                        required
                                    />
                                </Form.Group>
                            </Col>
                            <Col md={6} className="mb-3">
                                <Form.Group controlId="title">
                                    <Form.Label>Add Title</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter Title"
                                        value={title2}
                                        onChange={(e) => setTitle2(e.target.value)}
                                        required
                                    />
                                </Form.Group>
                            </Col>


                        </Row>

                        <Row>


                            <Col md={6} className="mb-3">
                                <Form.Group controlId="paragraph">
                                    <Form.Label>Description</Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        placeholder="Enter Description"
                                        value={description}
                                        onChange={(e) => setdescription(e.target.value)}
                                        required
                                    />
                                </Form.Group>
                            </Col>
                        </Row>

                        <div className="mt-3">
                            <Button variant="primary" onClick={handleSubmit5} type="submit">
                                Save
                            </Button>
                        </div>
                    </Form>
                </Card.Body>
            </Card>



            <Card border="light" className="bg-white shadow-sm mb-4">
                <Card.Body>
                    <h5 className="mb-4">Add Partners </h5>
                    <Form >
                        <Row>
                            <Col md={6} className="mb-3">
                                <Form.Group controlId="title">
                                    <Form.Label>Add Title</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter Title"
                                        value={title4}
                                        onChange={(e) => setTitle4(e.target.value)}
                                        required
                                    />
                                </Form.Group>
                            </Col>

                            <Col md={6} className="mb-3">
                                <Form.Group controlId="description">
                                    <Form.Label>Add Description</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter Description"
                                        value={description3}
                                        onChange={(e) => setdescription3(e.target.value)}
                                        required
                                    />
                                </Form.Group>
                            </Col>

                            <Col md={6} className="mb-3">
                                <Form.Group controlId="images">
                                    <Form.Label>Upload Images</Form.Label>
                                    <Form.Control
                                        type="file"
                                        accept="image/*"
                                        onChange={handleImageChange4}
                                        multiple
                                        required
                                    />
                                </Form.Group>
                            </Col>
                        </Row>

                        <div className="mt-3">
                            <Button onClick={handleSubmit6} variant="primary" type="submit">
                                Add Partners
                            </Button>
                        </div>
                    </Form>
                </Card.Body>
            </Card>




        </>
    );
};
