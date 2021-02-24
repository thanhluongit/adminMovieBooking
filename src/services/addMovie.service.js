import axios from "axios";

export const addMovie = (movie) => {
  // const adminCredentials = JSON.parse(
  //   localStorage.getItem("adminCredentials")
  // );
  // const accessToken = adminCredentials.accessToken;
  // console.log(movie);
  // console.log(accessToken);

  return async function (dispatch) {
    try {
      // getLocal
      const adminCredentials = JSON.parse(
        localStorage.getItem("adminCredentials")
      );

      console.log(movie);
      console.log(adminCredentials.accessToken);

      const res = await axios({
        url: "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/ThemPhim",
        method: "POST",
        data: movie,
        headers: {
          Authorization: `Bearer ${adminCredentials.accessToken}`,
          // "Content-Type": "application/json-patch+json",
          // Accept: "application/json",
          // Authorization: ` token ${adminCredentials.accessToken}`,
        },
      });

      if (res.status === 200 || res.status === 201) {
        console.log("oke");
      }
    } catch (error) {
      console.log(error);
      console.log("232313 loi roi");
    }
  };

  // return Axios({
  //   url: "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/ThemPhim",
  //   method: "POST",
  //   data: movie,
  //   // headers: {
  //   //   "Content-Type": "application/json-patch+json",
  //   //   Accept: "application/json",
  //   //   Authorization: ` token ${adminCredentials.accessToken}`,
  //   // },
  //   // Bearer
  //   // body: JSON.stringify({ movie, accessToken }),
  //   headers: {
  //     Authorization: `Bearer ${adminCredentials.accessToken}`,
  //   },
  // });
};
