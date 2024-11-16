import axios from "axios";

// export const fetchAllBlogs = async (token, setLoader, setGetData, getApi) => {
//   try {
//     setLoader(true); // Start loading
//     const response = await axios.get(getApi, {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//       params: {
//         awc2asoc: -1,
//         d1: -2,
//         e13: "d32mcmksci23kasnqwasadn3",
//       },
//     });
//     setGetData(response.data.data || []); // Assuming `data` array is in `response.data.data`
//   } catch (error) {
//     console.error("Error fetching data:", error);
//   } finally {
//     setLoader(false); // Stop loading
//   }
// };

export const fetchAllBlogs = async (token, getApi) => {
  const response = await axios.get(getApi, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    params: {
      awc2asoc: -1,
      d1: -2,
      e13: "d32mcmksci23kasnqwasadn3",
    },
  });

  // Return both blog data and pagination links
  return {
    data: response.data.data || [],
    links: response.data.links || [],
  };
};

// export const fetchBlogSingleData = async ({
//   blogsApi,
//   token,
//   setLoader,
//   setGetSlugId,
//   setGetData,
// }) => {
//   try {
//     setLoader(true); // Start loading
//     const response = await axios.get(blogsApi, {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//       params: {
//         awc2asoc: -1,
//         d1: -2,
//         e13: "d32mcmksci23kasnqwasadn3",
//       },
//     });

//     const slug = window.location.href.split("/").pop();
//     setGetSlugId(slug); // Set the slug based on URL
//     setGetData(response.data.data.data || []); // Set data from response
//   } catch (error) {
//     console.error("Error fetching data:", error);
//   } finally {
//     setLoader(false); // Stop loading
//   }
// };

export const fetchBlogSingleData = async ({ getApi, token }) => {
  const response = await axios.getget(getApi, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    params: {
      awc2asoc: -1,
      d1: -2,
      e13: "d32mcmksci23kasnqwasadn3",
    },
  });
  return response.data.data || [];
};
export const fetchBlogCategoryData = async ({ getApi }) => {
  const response = await axios.get(getApi);
  return response.data.data || [];
};
export const fetchData = async (setGetData, getApi) => {
  try {
    const response = await axios.get(getApi);
    setGetData(response.data.data || []);
  } catch (error) {
    console.error("Error fetching categories:", error);
  }
};
