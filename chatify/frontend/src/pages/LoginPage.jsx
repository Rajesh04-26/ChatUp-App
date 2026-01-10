import { useState } from "react";
import { useAuthStore } from "../store/useAuthStore";
import BorderAnimatedContainer from "../components/BorderAnimatedContainer";
import { MessageCircleIcon, MailIcon, LoaderIcon, LockIcon } from "lucide-react";
import { Link } from "react-router";

function LoginPage() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const { login, isLoggingIn } = useAuthStore();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(formData);
  };

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-[#eaf1ff] via-[#f5f8ff] to-[#dde7ff] p-6">
      <div className="w-full max-w-5xl h-[720px]">
        <BorderAnimatedContainer>
          <div className="flex w-full h-full rounded-3xl overflow-hidden bg-white shadow-xl">
            <div className="w-full md:w-1/2 flex items-center justify-center p-10">
              <div className="w-full max-w-md">
                <div className="text-center mb-10">
                  <MessageCircleIcon className="w-12 h-12 mx-auto text-blue-500 mb-4" />
                  <h2 className="text-3xl font-bold text-gray-800 mb-2">
                    Welcome to ChatUp
                  </h2>
                  <p className="text-gray-500">
                    Login to your account
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="auth-input-label">Email</label>
                    <div className="relative">
                      <MailIcon className="auth-input-icon" />
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="input"
                        placeholder="johndoe@gmail.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="auth-input-label">Password</label>
                    <div className="relative">
                      <LockIcon className="auth-input-icon" />
                      <input
                        type="password"
                        value={formData.password}
                        onChange={(e) =>
                          setFormData({ ...formData, password: e.target.value })
                        }
                        className="input"
                        placeholder="Enter your password"
                      />
                    </div>
                  </div>

                  <button
                    className="auth-btn"
                    type="submit"
                    disabled={isLoggingIn}
                  >
                    {isLoggingIn ? (
                      <LoaderIcon className="w-5 h-5 animate-spin mx-auto" />
                    ) : (
                      "Sign In"
                    )}
                  </button>
                </form>

                <div className="mt-8 text-center">
                  <Link to="/signup" className="auth-link">
                    Don&apos;t have an account? Sign Up
                  </Link>
                </div>
              </div>
            </div>

            <div className="hidden md:flex w-1/2 items-center justify-center bg-gradient-to-br from-blue-50 to-white p-10">
              <div className="text-center">
                <img
                  src="/login.png"
                  alt="Login illustration"
                  className="w-full max-w-sm mx-auto"
                />
                <h3 className="mt-8 text-xl font-semibold text-blue-600">
                 "Connect with friends, anywhere, anytime!"
                </h3>
                <div className="mt-4 flex justify-center gap-3">
                  <span className="auth-badge">Instant Chat</span>
                  <span className="auth-badge">Easy Setup</span>
                  <span className="auth-badge">Secure</span>
                </div>
              </div>
            </div>
          </div>
        </BorderAnimatedContainer>
      </div>
    </div>
  );
}

export default LoginPage;
