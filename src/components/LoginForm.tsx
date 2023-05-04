import { useState } from "react";
import {
  FormControl,
  FormLabel,
  Input,
  ModalFooter,
  Button,
  useToast,
  Spinner,
} from "@chakra-ui/react";

type LoginFormProps = {
  onLogin: (email: string, password: string) => Promise<void>;
  onSignup: () => void;
};

const LoginForm = ({ onLogin, onSignup }: LoginFormProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const toast = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await onLogin(email, password);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      toast({
        title: "Invalid credentials",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormControl id="email" isRequired>
        <FormLabel>Email</FormLabel>
        <Input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormControl>
      <FormControl id="password" isRequired>
        <FormLabel>Password</FormLabel>
        <Input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </FormControl>
      <ModalFooter>
        {isLoading ? (
          <Button colorScheme="blue" isDisabled>
            <Spinner mr="3" size="sm" />
            Logging in...
          </Button>
        ) : (
          <Button colorScheme="blue" mr={3} type="submit">
            Log in
          </Button>
        )}
        <Button onClick={onSignup}>Sign up</Button>
      </ModalFooter>
    </form>
  );
};

export default LoginForm;
