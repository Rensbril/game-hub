import { useContext, useState } from "react";
import {
  Avatar,
  HStack,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
  useToast,
} from "@chakra-ui/react";
import AuthContext from "../state-management/contexts/authContext";
import ColorModeSwitch from "./ColorModeSwitch";
import { login } from "./Login";
import ProfileHeader from "./ProfileHeader";
import SearchInput from "./SearchInput";
import logo from "../assets/logo.webp";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";

interface Props {
  onsearch: (searchText: string) => void;
}

const NavBar = ({ onsearch }: Props) => {
  const { session, dispatch } = useContext(AuthContext);

  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignupModal, setShowSignupModal] = useState(false);

  const toast = useToast();

  const handleLogin = async (email: string, password: string) => {
    try {
      const action = await login({
        email: email,
        password: password,
      });
      dispatch(action);
      setShowLoginModal(false);
    } catch (error) {
      console.error(error);
      toast({
        title: `${error}`,
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  const handleSignup = async (email: string, password: string) => {
    setShowSignupModal(false);
    toast({
      title: "Rens was lazy and didn't implement this YET!!!!",
      status: "error",
      duration: 6000,
      isClosable: true,
    });
  };

  return (
    <HStack padding="10px">
      <Image src={logo} boxSize="60px" />
      <Text>
        <ColorModeSwitch />
      </Text>
      <SearchInput onsearch={onsearch} />
      {session ? (
        <ProfileHeader session={session} />
      ) : (
        <>
          <Avatar cursor="pointer" onClick={() => setShowLoginModal(true)} />
          <Modal
            isOpen={showLoginModal}
            onClose={() => setShowLoginModal(false)}
          >
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Login</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <LoginForm
                  onLogin={handleLogin}
                  onSignup={() => setShowSignupModal(true)}
                />
              </ModalBody>
            </ModalContent>
          </Modal>
          <Modal
            isOpen={showSignupModal}
            onClose={() => setShowSignupModal(false)}
          >
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Sign Up</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <SignupForm onSignup={handleSignup} />
              </ModalBody>
            </ModalContent>
          </Modal>
        </>
      )}
    </HStack>
  );
};

export default NavBar;
