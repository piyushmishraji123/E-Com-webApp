import styled from "styled-components";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import XIcon from "@mui/icons-material/X";
import PlaceIcon from '@mui/icons-material/Place';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import { mobile } from "../Responsive";

const Container = styled.div`
  display: flex;
  ${mobile({flexDirection:"column"})}
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;
const Logo = styled.h1``;
const Desc = styled.p`
  margin: 20px 0px;
`;
const SocialContainer = styled.div`
  display: flex;
`;
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${props=>props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;

`;
const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({display:"none"})}
`;
const Title =styled.h3`
margin: 30px;`
const List =styled.ul`
margin:0;
padding:0;
list-style: none;
display: flex;
flex-wrap: wrap;
`
const ListItem =styled.li`
width:50%;
margin-bottom:10px;
`
const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({backgroundColor:"#fcf5f5"})}
`;
const ContactItem=styled.div`
margin-bottom:20px;
display: flex;
align-items: center;

`
const Payment=styled.img`
width:50%;
`


const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>E-Commerce</Logo>
        <Desc>
          Ecommerce websites facilitate seamless online shopping, allowing users
          to browse and purchase a diverse array of products with secure
          transactions and doorstep delivery.
        </Desc>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <FacebookIcon />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <InstagramIcon />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <PinterestIcon />
          </SocialIcon>
          <SocialIcon color="E60023">
            <XIcon />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Women fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>  
      </Center>
      <Right>
      <Title>Contact</Title>
        <ContactItem>
        <PlaceIcon style={{marginRight:"10px"}}/>
          103 Mangal Nagar India
        </ContactItem>
        <ContactItem>
        <PhoneIcon style={{marginRight:"10px"}}/>
          +91 1234567890
        </ContactItem>
        <ContactItem>
        <EmailIcon style={{marginRight:"10px"}}/>
          meramail@gmail.com
        </ContactItem>
        <Payment src ="https://i.ibb.co/Qfvn4z6/payment.png"/>
      </Right>
    </Container>
  );
};

export default Footer;
