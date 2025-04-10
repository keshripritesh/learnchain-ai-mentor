import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { signIn, signOut, useSession } from "next-auth/react";
import { SiweMessage } from "siwe";
import { ethers } from "ethers";

export default function Login() {
  const { data: session } = useSession();
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleLogin() {
    try {
      setLoading(true);
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      await provider.send("eth_requestAccounts", []);
      const signer = provider.getSigner();
      const address = await signer.getAddress();

      const message = new SiweMessage({
        domain: window.location.host,
        address,
        statement: "Sign in with Ethereum to the AI Mentor app.",
        uri: window.location.origin,
        version: "1",
        chainId: await signer.getChainId(),
        nonce: await (await fetch("/api/auth/nonce")).text(),
      });

      const signature = await signer.signMessage(message.prepareMessage());

      const res = await signIn("credentials", {
        message: JSON.stringify(message),
        redirect: false,
        signature,
        callbackUrl: "/dashboard",
      });

      if (res?.ok) router.push("/dashboard");
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <button
        onClick={handleLogin}
        className="px-6 py-3 bg-purple-600 text-white rounded shadow-lg hover:bg-purple-700"
        disabled={loading}
      >
        {loading ? "Connecting..." : "Login with MetaMask"}
      </button>
    </div>
  );
}
