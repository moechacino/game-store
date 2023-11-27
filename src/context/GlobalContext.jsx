import { createContext } from "react";
import axios from "axios";
import { useState } from "react";

export const GlobalContext = createContext();

export const GlobalProvider = (props) => {
  const MOVIE_API_GET = process.env.REACT_APP_MOVIE_API_GET;
  const MOVIE_API_POST = process.env.REACT_APP_MOVIE_API_POST;
  const MOVIE_API_PUT = process.env.REACT_APP_MOVIE_API_PUT;
  const MOVIE_API_DELETE = process.env.REACT_APP_MOVIE_API_DELETE;
  const MOVIE_API_GETONE = process.env.REACT_APP_MOVIE_API_GETONE;

  const [form, setForm] = useState({
    name: "",
    description: "",
    category: "",
    release_year: 2007,
    size: 0,
    price: 0,
    rating: 0,
    image_url: "",
    is_android_app: 0,
    is_ios_app: 0,
  });
  const [data, setData] = useState(null);
  const [fetchStatus, setFetchStatus] = useState(true);
  let [currentId, setCurrentId] = useState(-1);
  const fetchData = () => {
    axios
      .get(MOVIE_API_GET)
      .then((res) => {
        setData([...res.data]);
      })
      .catch((err) => {
        console.log(err);
      });
    setFetchStatus(false);
  };
  const handleForm = (event) => {
    const { name, value } = event.target;
    setForm({
      ...form,
      [name]: isNaN(value) ? value : parseInt(value, 10),
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const {
      name,
      description,
      category,
      release_year,
      size,
      price,
      rating,
      image_url,
      is_android_app,
      is_ios_app,
    } = form;
    if (currentId === -1) {
      if (rating > 5 || rating < 0) {
        alert("Rating harus di antara 0 dan 5");
      } else if (release_year > 2023 || release_year < 2007) {
        alert("Release year harus di antara 2007 dan 2023");
      } else if (is_android_app === 0 && is_ios_app === 0) {
        alert("Pilih minimal satu platform");
      } else {
        axios
          .post(MOVIE_API_POST, {
            name,
            description,
            category,
            release_year,
            size,
            price,
            rating,
            image_url,
            is_android_app,
            is_ios_app,
          })
          .then((res) => {
            alert("Berhasil Menambahkan Data");
            setFetchStatus(true);
            setCurrentId(-1);
            console.log(res);
          })
          .catch((err) => console.error(err));
      }
    } else {
      if (rating > 5 || rating < 0) {
        alert("Rating harus di antara 0 dan 5");
      } else if (release_year > 2023 || release_year < 2007) {
        alert("Release year harus di antara 2007 dan 2023");
      } else if (is_android_app === 0 && is_ios_app === 0) {
        alert("Pilih minimal satu platform");
      } else {
        axios
          .put(`${MOVIE_API_PUT}/${currentId}`, {
            name,
            description,
            category,
            release_year,
            size,
            price,
            rating,
            image_url,
            is_android_app,
            is_ios_app,
          })
          .then((res) => {
            alert("Berhasil Mengupdate Data");
            setFetchStatus(true);
            setCurrentId(-1);
            setForm({
              name: "",
              description: "",
              category: "",
              release_year: 2007,
              size: 0,
              price: 0,
              rating: 0,
              image_url: "",
              is_android_app: 0,
              is_ios_app: 0,
            });
          })
          .catch((err) => console.error(err));
      }
    }
  };
  const handleDelete = (event) => {
    let idData = parseInt(event.target.value);
    axios.delete(`${MOVIE_API_DELETE}/${idData}`).then((res) => {
      setFetchStatus(true);
    });
  };
  const handleEdit = (event) => {
    let idData = parseInt(event.target.value);

    axios
      .get(`${MOVIE_API_GETONE}/${idData}`)
      .then((res) => {
        const {
          name,
          description,
          category,
          release_year,
          size,
          price,
          rating,
          image_url,
          is_android_app,
          is_ios_app,
        } = res.data;
        setForm({
          name,
          description,
          category,
          release_year,
          size,
          price,
          rating,
          image_url,
          is_android_app,
          is_ios_app,
        });
      })
      .catch((err) => {
        console.log(err);
      });
    setCurrentId(idData);
  };
  const state = {
    form,
    setForm,
    fetchStatus,
    setFetchStatus,
    data,
    setData,
    currentId,
    setCurrentId,
  };

  const handleFunction = {
    handleForm,
    handleSubmit,
    fetchData,
    handleDelete,
    handleEdit,
  };

  return (
    <GlobalContext.Provider value={{ state, handleFunction }}>
      {props.children}
    </GlobalContext.Provider>
  );
};
