import { Card } from "react-bootstrap";
import classes from "./Home.module.css";

function Home() {
  return (
    <Card className={classes.card}>
      <Card.Header className={classes.header}>
        The Benefits of Gardening
      </Card.Header>
      <Card.Body>
        <Card.Img
          style={{
            float: "left",
            width: "300px",
            height: "200px",
            padding: "10px",
          }}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBDGCevPoP-YKnJcGIO33Mk41c2UWY-ly48ZxO-uwbrmax6hp5zuwqCup7hjU15dOEasE&usqp=CAU"
          alt="flower"
        />
        <Card.Text>
          Gardening is a fulfilling hobby that offers numerous benefits for both
          the body and mind. It’s more than just a way to beautify our
          surroundings; it’s a way to enhance our well-being in several
          meaningful ways. Physical Health Gardening is a great form of
          exercise. Activities like digging, planting, and weeding provide a
          full-body workout that can improve cardiovascular health, strengthen
          muscles, and increase flexibility. It’s especially beneficial for
          those looking for low-impact physical activity. Mental Health Spending
          time in a garden reduces stress and anxiety. The act of nurturing
          plants provides a sense of purpose and achievement, while the tranquil
          environment helps with relaxation and mindfulness. Emotional
          Well-Being Gardening fosters a connection with nature and can be a
          social activity. Community gardens, for instance, offer a chance to
          meet new people, share experiences, and work together towards common
          goals, reducing feelings of loneliness. Cognitive Benefits Gardening
          stimulates the mind. Planning and maintaining a garden enhances
          problem-solving skills and memory, keeping the brain active and
          engaged. Environmental Impact Gardening is good for the environment.
          Plants improve air quality, gardens support wildlife, and growing your
          own food reduces the need for store-bought produce, lowering your
          carbon footprint. Economic Savings Growing your own fruits and
          vegetables can save money on groceries.
          <Card.Img
            style={{
              float: "right",
              width: "200px",
              height: "200px",
              padding: "10px",
            }}
            src="https://favim.com/pd/p/orig/2019/03/13/gardening-tumblr-aesthetic-Favim.com-6970375.jpg"
            alt="flower"
          />
          Even a small garden can yield a significant amount of produce, making
          it a cost-effective way to enjoy fresh, organic food. Educational
          Opportunities Gardening is educational for all ages. It teaches
          children about nature and science, and for adults, it offers
          continuous learning about plant care, growing techniques, and
          environmental stewardship. Conclusion In summary, gardening is a
          rewarding activity with numerous benefits. It enhances physical
          health, mental well-being, cognitive function, and provides economic
          and environmental advantages. Whether you have a small balcony garden
          or a large backyard, the joys and benefits of gardening are within
          reach for everyone.
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Home;
