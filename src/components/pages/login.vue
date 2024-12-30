<template>
  <div class="login-page">
    <div class="mountains-back"></div>
    <div class="mountains-front"></div>
    <div class="stars"></div>

    <div class="login-container">
      <div class="bear-container" ref="bearContainer">
        <svg
          v-if="!isPasswordFocused"
          width="100"
          height="100"
          viewBox="0 0 200 200"
        >
          <!-- 熊臉 -->
          <circle cx="100" cy="100" r="90" fill="#8B4513" />
          <circle cx="100" cy="110" r="75" fill="#D2691E" />

          <!-- 耳朵 -->
          <circle cx="40" cy="40" r="20" fill="#8B4513" />
          <circle cx="160" cy="40" r="20" fill="#8B4513" />

          <!-- 眼睛 -->
          <g class="eyes">
            <circle :cx="leftEyeX" :cy="leftEyeY" r="10" fill="black" />
            <circle :cx="rightEyeX" :cy="rightEyeY" r="10" fill="black" />
          </g>

          <!-- 鼻子 -->
          <circle cx="100" cy="120" r="15" fill="black" />
        </svg>

        <svg v-else width="100" height="100" viewBox="0 0 200 200">
          <!-- 閉眼的熊 -->
          <circle cx="100" cy="100" r="90" fill="#8B4513" />
          <circle cx="100" cy="110" r="75" fill="#D2691E" />
          <circle cx="40" cy="40" r="20" fill="#8B4513" />
          <circle cx="160" cy="40" r="20" fill="#8B4513" />
          <path
            d="M60 90 Q80 100 100 90"
            stroke="black"
            stroke-width="3"
            fill="none"
          />
          <path
            d="M100 90 Q120 100 140 90"
            stroke="black"
            stroke-width="3"
            fill="none"
          />
          <circle cx="100" cy="120" r="15" fill="black" />
        </svg>
      </div>

      <h1>Login</h1>

      <form @submit.prevent="handleSubmit" class="login-form">
        <div class="form-group">
          <input
            ref="usernameInput"
            type="text"
            v-model="username"
            placeholder="Username"
            @focus="handleInputFocus('username')"
            @blur="handleInputBlur"
            @input="handleUsernameInput"
          />
        </div>

        <div class="form-group">
          <input
            type="password"
            v-model="password"
            placeholder="Password"
            @focus="handleInputFocus('password')"
            @blur="handleInputBlur"
          />
        </div>

        <div class="form-options">
          <label class="remember-me">
            <input type="checkbox" /> Remember me
          </label>
          <a href="#" class="forgot-password">Forgot password?</a>
        </div>

        <button type="submit">Login</button>

        <div class="register-link">
          Don't have an account? <a href="#">Register</a>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

// 響應式狀態
const username = ref("");
const password = ref("");
const isPasswordFocused = ref(false);
const isUsernameFocused = ref(false);
const leftEyeX = ref(80);
const leftEyeY = ref(90);
const rightEyeX = ref(120);
const rightEyeY = ref(90);
const baseLeftEyeX = 80;
const baseLeftEyeY = 90;
const baseRightEyeX = 120;
const baseRightEyeY = 90;
const inputCenterX = ref(0);
const inputCenterY = ref(0);
const bearCenterX = ref(0);
const bearCenterY = ref(0);

// DOM refs
const usernameInput = ref(null);
const bearContainer = ref(null);

// 方法
const updateInputPosition = () => {
  if (usernameInput.value) {
    const inputRect = usernameInput.value.getBoundingClientRect();
    const bearRect = bearContainer.value.getBoundingClientRect();
    inputCenterX.value = inputRect.left;
    inputCenterY.value = inputRect.top + inputRect.height / 2;
    bearCenterX.value = bearRect.left + bearRect.width / 2;
    bearCenterY.value = bearRect.top + bearRect.height / 2;
  }
};

const handleUsernameInput = () => {
  if (isUsernameFocused.value) {
    const input = usernameInput.value;
    const cursorPosition = input.selectionStart;
    const charWidth = 8;

    const cursorX = inputCenterX.value + cursorPosition * charWidth + 16;

    const angle = Math.atan2(
      inputCenterY.value - bearCenterY.value,
      cursorX - bearCenterX.value
    );

    const eyeMovementRadius = 8;
    leftEyeX.value = baseLeftEyeX + Math.cos(angle) * eyeMovementRadius;
    leftEyeY.value = baseLeftEyeY + Math.sin(angle) * eyeMovementRadius;
    rightEyeX.value = baseRightEyeX + Math.cos(angle) * eyeMovementRadius;
    rightEyeY.value = baseRightEyeY + Math.sin(angle) * eyeMovementRadius;
  }
};

const handleMouseMove = (event) => {
  if (!isPasswordFocused.value && !isUsernameFocused.value) {
    const angle = Math.atan2(
      event.clientY - bearCenterY.value,
      event.clientX - bearCenterX.value
    );
    updateEyePosition(angle);
  }
};

const updateEyePosition = (angle) => {
  const eyeMovementRadius = 5;
  leftEyeX.value = baseLeftEyeX + Math.cos(angle) * eyeMovementRadius;
  leftEyeY.value = baseLeftEyeY + Math.sin(angle) * eyeMovementRadius;
  rightEyeX.value = baseRightEyeX + Math.cos(angle) * eyeMovementRadius;
  rightEyeY.value = baseRightEyeY + Math.sin(angle) * eyeMovementRadius;
};

const handleInputFocus = (inputType) => {
  if (inputType === "password") {
    isPasswordFocused.value = true;
    isUsernameFocused.value = false;
  } else {
    isPasswordFocused.value = false;
    isUsernameFocused.value = true;
    updateInputPosition();
    handleUsernameInput();
  }
};

const handleInputBlur = () => {
  isPasswordFocused.value = false;
  isUsernameFocused.value = false;
  leftEyeX.value = baseLeftEyeX;
  leftEyeY.value = baseLeftEyeY;
  rightEyeX.value = baseRightEyeX;
  rightEyeY.value = baseRightEyeY;
};

const handleSubmit = () => {
  console.log("Form submitted:", {
    username: username.value,
    password: password.value,
  });
};

// 生命周期鉤子
onMounted(() => {
  document.addEventListener("mousemove", handleMouseMove);
  updateInputPosition();
  window.addEventListener("resize", updateInputPosition);
});

onBeforeUnmount(() => {
  document.removeEventListener("mousemove", handleMouseMove);
  window.removeEventListener("resize", updateInputPosition);
});
</script>

<style scoped>
.login-page {
  min-height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(180deg, #2c1446 0%, #2c1446 50%, #1a0b2e 100%);
  position: relative;
  overflow: hidden;
}

.mountains-back {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 40vh;
  background: linear-gradient(
    180deg,
    transparent 0%,
    #392359 40%,
    #261640 100%
  );
  clip-path: polygon(
    0 45%,
    15% 25%,
    30% 45%,
    50% 15%,
    70% 35%,
    85% 15%,
    100% 35%,
    100% 100%,
    0 100%
  );
}

.mountains-front {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 30vh;
  background: linear-gradient(180deg, #261640 0%, #1a0b2e 100%);
  clip-path: polygon(
    0 45%,
    20% 25%,
    40% 45%,
    60% 25%,
    80% 45%,
    100% 25%,
    100% 100%,
    0 100%
  );
}

.stars {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: radial-gradient(
      2px 2px at 20px 30px,
      #ffffff,
      rgba(0, 0, 0, 0)
    ),
    radial-gradient(2px 2px at 40px 70px, #ffffff, rgba(0, 0, 0, 0)),
    radial-gradient(2px 2px at 50px 160px, #ffffff, rgba(0, 0, 0, 0)),
    radial-gradient(2px 2px at 90px 40px, #ffffff, rgba(0, 0, 0, 0)),
    radial-gradient(2px 2px at 130px 80px, #ffffff, rgba(0, 0, 0, 0));
  background-size: 200px 200px;
  animation: sparkle 5s infinite;
}

@keyframes sparkle {
  0% {
    opacity: 0.8;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0.8;
  }
}

.login-container {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  padding: 2rem;
  border-radius: 20px;
  width: 90%;
  max-width: 450px;
  position: relative;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.bear-container {
  position: absolute;
  top: -50px;
  left: 50%;
  transform: translateX(-50%);
}

h1 {
  color: white;
  text-align: center;
  margin: 1rem 0 2rem;
  font-size: 2rem;
}

.form-group {
  margin-bottom: 1.5rem;
}

input {
  width: 100%;
  padding: 0.8rem 1rem;
  border: none;
  border-radius: 25px;
  background: rgba(255, 255, 255, 0.1);
  color: white;
  font-size: 1rem;
  backdrop-filter: blur(5px);
  transition: all 0.3s ease;
}

input::placeholder {
  color: rgba(255, 255, 255, 0.7);
}

input:focus {
  outline: none;
  background: rgba(255, 255, 255, 0.2);
}

.form-options {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.9rem;
}

.remember-me {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  letter-spacing: normal;
  width: 50%;
}
.remember-me input {
    width: 10%;
}

.forgot-password {
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  letter-spacing: normal;
}

button {
  width: 100%;
  padding: 0.8rem;
  background: linear-gradient(45deg, #ff6b6b, #ffc5c5);
  color: white;
  border: none;
  border-radius: 25px;
  font-size: 1rem;
  cursor: pointer;
  transition: transform 0.3s ease;
}

button:hover {
  transform: translateY(-2px);
}

.register-link {
  text-align: center;
  margin-top: 1.5rem;
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.9rem;
}

.register-link a {
  color: #ff6b6b;
  text-decoration: none;
  font-weight: bold;
}

/* 確保所有連結在懸停時有反饋 */
a:hover {
  text-decoration: underline;
}
</style>
