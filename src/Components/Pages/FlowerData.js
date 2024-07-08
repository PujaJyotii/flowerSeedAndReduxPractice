import { Button, Card, Col, Container, Row } from "react-bootstrap";
import classes from "./FlowerData.module.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { CartAction } from "../Store/CartSlice";

const flowers = [
  {
    id: 1,
    name: "Rose",
    extraImages: [
      "https://images.unsplash.com/photo-1619532839116-af15d051cd3e?fm=jpg&w=3000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3G2ke8WJB3j40z2Etf4ZGZKObAFu91nZLmQ&s",
      "https://www.jiomart.com/images/product/original/rvibirnytu/cloud-farm-real-live-dark-red-rose-live-plant-hybrid-for-balcony-terrace-outdoor-gardening-cf_2064-product-images-orvibirnytu-p603649580-0-202308050834.jpg?im=Resize=(420,420)",
    ],

    Images:
      "https://thursd.com/storage/media/53153/red-rose-on-a-dark-background.jpg",
    price: 10,
    description: "A beautiful red rose.",
    reviews: ["Amazing fragrance!", "Very fresh."],
    color: "Red",
  },
  {
    id: 2,
    name: "Tulip",
    extraImages: [
      "https://plus.unsplash.com/premium_photo-1677620614560-5f1b32416563?fm=jpg&w=3000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://www.bhg.com/thmb/JeNTNQlM3_bGi0hv9VpuC3qScmo=/4000x0/filters:no_upscale():strip_icc()/planting-tulip-bulbs-7570948-7329da3827e84498b35610a86734a8fa.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8nZUopxyUVRc6K3o_IHNtw_ZFUBCUMl2xyA&s",
    ],

    Images:
      "https://plus.unsplash.com/premium_photo-1677620614560-5f1b32416563?fm=jpg&w=3000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 8,
    description: "A vibrant tulip flower.",
    reviews: ["Bright colors!", "Perfect for spring."],
    color: "Pink",
  },
  {
    id: 3,
    name: "Sunflower",
    extraImages: [
      "https://www.thespruce.com/thmb/woFvwJplA7SNpjANU8ug9sPstsk=/2122x0/filters:no_upscale():max_bytes(150000):strip_icc()/when-to-plant-sunflowers-167ccf66dc6f4047b5db354db190d15d.jpg",
      "https://media.post.rvohealth.io/wp-content/uploads/2020/06/sunflower-seeds-1200x628-facebook-1200x628.jpg",
      "https://www.almanac.com/sites/default/files/users/AlmanacStaffArchive/sunflower-1533697_1920_0_full_width.jpg",
    ],

    Images:
      "https://www.thespruce.com/thmb/woFvwJplA7SNpjANU8ug9sPstsk=/2122x0/filters:no_upscale():max_bytes(150000):strip_icc()/when-to-plant-sunflowers-167ccf66dc6f4047b5db354db190d15d.jpg",
    price: 12,
    description: "A tall sunflower with a big bloom.",
    reviews: ["Loved the size!", "Great for gardens."],
    color: "Yellow",
  },
  {
    id: 4,
    name: "Daffodil",
    extraImages: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUo9jLI81L0oWhgHZIuTGqZ6wnRywLTLyH3g&s",
      "https://5.imimg.com/data5/SELLER/Default/2022/8/KU/ZL/BD/139926615/planting-daffodil-bulbs-in-the-garden-500x500.jpg",
      "https://i.pinimg.com/736x/b5/1b/13/b51b1301008a6699120d4a8428c755a2.jpg",
    ],

    Images:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUo9jLI81L0oWhgHZIuTGqZ6wnRywLTLyH3g&s",
    price: 9,
    description: "A charming daffodil flower.",
    reviews: ["Very delicate.", "Bright and beautiful."],
    color: "Yellow",
  },
  {
    id: 5,
    name: "Lily",
    extraImages: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc6PkLwjCpK-RmZR5H0krTCcSke0B1FOjrOQ&s",
      "https://static.themarthablog.com/2021/07/k8VrU4Tv-DSC_0779-1.jpeg",
      "https://tiimg.tistatic.com/fp/1/008/580/fresh-cut-white-lily-flower-for-decoration-583.jpg",
    ],
    Images:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc6PkLwjCpK-RmZR5H0krTCcSke0B1FOjrOQ&s",
    price: 15,
    description: "An elegant lily flower.",
    reviews: ["Elegant and beautiful.", "Lovely scent."],
    color: "White",
  },
  {
    id: 6,
    name: "Orchid",
    extraImages: [
      "https://images.unsplash.com/photo-1534885320675-b08aa131cc5e?fm=jpg&w=3000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHVycGxlJTIwb3JjaGlkfGVufDB8fDB8fHww",
      "https://4.imimg.com/data4/UG/CL/MY-30064038/dried-neem-seed-500x500.jpg",
      "https://images-cdn.ubuy.co.in/63c41c3d3cbefe34d12faff2-large-purple-orchids-artificial-flowers.jpg",
    ],

    Images:
      "https://images.unsplash.com/photo-1534885320675-b08aa131cc5e?fm=jpg&w=3000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHVycGxlJTIwb3JjaGlkfGVufDB8fDB8fHww",
    price: 20,
    description: "A delicate orchid flower.",
    reviews: ["Very exotic.", "Perfect for gifts."],
    color: "Purple",
  },
  {
    id: 7,
    name: "Daisy",
    extraImages: [
      "https://images.pexels.com/photos/122611/pexels-photo-122611.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://4.imimg.com/data4/IN/EH/MY-3318872/daisy-seed-500x500.jpg",
      "https://images.unsplash.com/photo-1560717789-0ac7c58ac90a?fm=jpg&w=3000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],

    Images:
      "https://images.pexels.com/photos/122611/pexels-photo-122611.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    price: 5,
    description: "A simple yet charming daisy.",
    reviews: ["So cute!", "Great for decorations."],
    color: "White",
  },
  {
    id: 8,
    name: "Peony",
    extraImages: [
      "https://cdn.mos.cms.futurecdn.net/cekqdDM5kNkwjopXeMn9KG.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-Qn99vzjJgKVxCiZgdFnLkMo080vNu98aVg&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-3sSO3F9uUGxcrzquWSIox_cQ16WFwaFfZQ&s",
    ],

    Images: "https://cdn.mos.cms.futurecdn.net/cekqdDM5kNkwjopXeMn9KG.jpg",
    price: 18,
    description: "A lush peony flower.",
    reviews: ["Very full blooms.", "Gorgeous!"],
    color: "Pink",
  },
  {
    id: 9,
    name: "Marigold",
    extraImages: [
      "https://www.syngentaflowers-us.com/sites/g/files/kgtney846/files/image/import/field_thumbnail_image/syngenta-flowers-pim/image/upload/t_d7_highres/v1625948412/70041091/na/70041091-flower.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzxaAgAe5eRQOX4-RYENAvUZk97PPxw-2s4w&s",
      "https://5.imimg.com/data5/ANDROID/Default/2023/5/308432991/PP/PL/DN/133684853/product-jpeg.jpg",
    ],
    Images:
      "https://www.syngentaflowers-us.com/sites/g/files/kgtney846/files/image/import/field_thumbnail_image/syngenta-flowers-pim/image/upload/t_d7_highres/v1625948412/70041091/na/70041091-flower.jpg",
    price: 6,
    description: "A bright marigold flower.",
    reviews: ["Very vibrant.", "Perfect for borders."],
    color: "Orange",
  },
  {
    id: 10,
    name: "Carnation",
    Images:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi9MUWDN8k9ELL3KM6bFgHlJeYZ0brT25HSw&s",
    extraImages: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi9MUWDN8k9ELL3KM6bFgHlJeYZ0brT25HSw&s",
      "https://5.imimg.com/data5/EJ/BW/MY-37091599/carnation-seeds-500x500.jpg",
      "https://flowermoxie.com/cdn/shop/products/47536640341_dda726dbd5_o.jpg?v=1554474289",
    ],

    price: 7,
    description: "A classic carnation flower.",
    reviews: ["Long-lasting.", "Great for bouquets."],
    color: "Red",
  },
  {
    id: 11,
    name: "Lavender",
    Images:
      "https://rukminim2.flixcart.com/image/850/1000/xif0q/plant-seed/y/a/e/80-lavnher-k231-moofga-original-imaghnbnzxhz3hmw.jpeg?q=90&crop=false",
    extraImages: [
      "https://rukminim2.flixcart.com/image/850/1000/xif0q/plant-seed/y/a/e/80-lavnher-k231-moofga-original-imaghnbnzxhz3hmw.jpeg?q=90&crop=false",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBRDHIJiNTAXg7N2rctIZkTg31_Qi79qzFIQ&s",
      "https://onlineorchards.com/cdn/shop/products/englishlavender1_1024x1024@2x.jpg?v=1660861027",
    ],

    price: 11,
    description: "A fragrant lavender flower.",
    reviews: ["Lovely scent.", "Great for relaxation."],
    color: "Purple",
  },
  {
    id: 12,
    name: "Iris",
    Images:
      "https://cdn.britannica.com/11/174711-050-9A8DDE76/Flower-Iris-Siberian-flag-Garden-Close-up.jpg",
    extraImages: [
      "https://cdn.britannica.com/11/174711-050-9A8DDE76/Flower-Iris-Siberian-flag-Garden-Close-up.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfV6GOJtbYzxNFFGOoumLKOd9ntvnI-iaJzA&s",
      "https://txmg.org/hendersonmg/files/2022/03/Iris-Purple-Bearded-1.jpg",
    ],

    price: 14,
    description: "A striking iris flower.",
    reviews: ["Unique color.", "Very pretty."],
    color: "Blue",
  },
  {
    id: 13,
    name: "Chrysanthemum",
    Images:
      "https://cdn.pixabay.com/photo/2022/01/06/12/08/chrysanthemum-6919359_640.jpg",
    extraImages: [
      "chrysanthemum1.jpg",
      "https://5.imimg.com/data5/CI/NT/TF/SELLER-24421102/premium-chrysanthemum-seeds.jpg",
      "https://i0.wp.com/www.gardeningchannel.com/wp-content/uploads/2019/09/yellow-mums.jpeg?resize=750%2C926&ssl=1",
    ],

    price: 13,
    description: "A beautiful chrysanthemum.",
    reviews: ["Very versatile.", "Great for fall."],
    color: "Yellow",
  },
  {
    id: 14,
    name: "Begonia",
    Images:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2W5PXYP5F1mjQiYu0BNFbuyKHt7OrGdZN3g&s",
    extraImages: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2W5PXYP5F1mjQiYu0BNFbuyKHt7OrGdZN3g&s",
      "https://www.begonias.org/wp-content/uploads/2021/08/Seeds-IMG-3204-980x735-1.jpeg",
      "https://www.gardendesign.com/pictures/images/900x705Max/site_3/begonia-surefire-rose-pink-begonia-potted-begonia-proven-winners_15847.jpg",
    ],

    price: 9,
    description: "A lovely begonia flower.",
    reviews: ["Very colorful.", "Easy to grow."],
    color: "Pink",
  },
  {
    id: 15,
    name: "Geranium",
    Images:
      "https://www.bhg.com/thmb/qONuRXLGLWs0mEb9Ig7Gzdjj5lc=/1386x0/filters:no_upscale():strip_icc()/daredevil-claret-geranium-0880b547-1b93939520b642d5abe818b45870896c.jpg",
    extraImages: [
      "https://www.bhg.com/thmb/qONuRXLGLWs0mEb9Ig7Gzdjj5lc=/1386x0/filters:no_upscale():strip_icc()/daredevil-claret-geranium-0880b547-1b93939520b642d5abe818b45870896c.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCL92nLPfBiSnYPVEXV9fxObbkeAe97zpX6g&s",
      "https://5.imimg.com/data5/SELLER/Default/2024/1/376981944/CZ/GL/DC/205359064/red-geranium-flower-plant.jpg",
    ],

    price: 8,
    description: "A bright geranium flower.",
    reviews: ["Perfect for pots.", "Very hardy."],
    color: "Red",
  },
  {
    id: 16,
    name: "Petunia",
    Images:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLohU-DZYJQfxVqeDBBDybKqhTTuY-lxSQhQ&s",
    extraImages: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLohU-DZYJQfxVqeDBBDybKqhTTuY-lxSQhQ&s",
      "https://5.imimg.com/data5/TU/JF/AK/SELLER-13580811/petunia-seed.jpg",
      "https://seedsnsuch.com/cdn/shop/products/shockwavedeeppurple-1_grande.jpg?v=1592089661",
    ],

    price: 10,
    description: "A colorful petunia flower.",
    reviews: ["Very vibrant.", "Great for hanging baskets."],
    color: "Purple",
  },
  {
    id: 17,
    name: "Hydrangea",
    Images:
      "https://images.unsplash.com/photo-1621518856558-9b2ce2d0660d?fm=jpg&w=3000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGh5ZHJhbmdlYXxlbnwwfHwwfHx8MA%3D%3D",
    extraImages: [
      "https://images.unsplash.com/photo-1621518856558-9b2ce2d0660d?fm=jpg&w=3000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGh5ZHJhbmdlYXxlbnwwfHwwfHx8MA%3D%3D",
      "https://image.made-in-china.com/202f0j00IADhJiUgbYcW/Xiu-Qiu-zhong-zi-top-quality-blue-hydrangea-seeds-pink-hydrangea-flower-seeds.webp",
      "https://images.unsplash.com/photo-1549100789-756142409c2e?fm=jpg&w=3000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aHlkcmFuZ2VhfGVufDB8fDB8fHww",
    ],

    price: 25,
    description: "A large hydrangea bloom.",
    reviews: ["Beautiful colors.", "Great for landscaping."],
    color: "Blue",
  },
  {
    id: 18,
    name: "Gardenia",
    Images:
      "https://cdn.britannica.com/04/197204-050-B60F40C7/Cape-jasmine-flower.jpg",
    extraImages: [
      "https://cdn.britannica.com/04/197204-050-B60F40C7/Cape-jasmine-flower.jpg",
      "https://www.maangchi.com/wp-content/uploads/2015/04/chija.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBA9k0rbZrMQ6KHZTGuHjxUAgWUEqtxBhpYg&s",
    ],
    price: 16,
    description: "A fragrant gardenia flower.",
    reviews: ["Lovely scent.", "Perfect for weddings."],
    color: "White",
  },
];

function FlowerData() {
  const dispatch = useDispatch();
  const addHandler = (fl) => {
    dispatch(CartAction.add({ ...fl, quantity: 1 }));
  };
  return (
    <Container className={classes.whole}>
      <Row xs={2} lg={4} md={4}>
        {flowers.map((fl) => (
          <Col key={fl.id}>
            <Card className={classes.card}>
              <Card.Img variant="top" className={classes.img} src={fl.Images} />
              <Card.Body>
                <Link style={{ color: "white" }} to={`/data/${fl.id}`}>
                  <Card.Title>{fl.name}</Card.Title>
                  <Card.Text>Price:${fl.price}</Card.Text>
                  <Card.Text>Color:{fl.color}</Card.Text>
                </Link>
                <Button variant="primary" onClick={() => addHandler(fl)}>
                  Add to cart
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default FlowerData;
