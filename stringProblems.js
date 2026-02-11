// ১. স্ট্রিং ট্রাঙ্কেট করা (Content Preview Task)
// অনেক সময় ব্লগের টাইটেল বা ডেসক্রিপশন অনেক বড় হয়, যা কার্ডের ভেতর ধরে না। তখন আমাদের সেটা ছোট করে শেষে তিনটি ডট (...) দিতে হয়। const description = "JavaScript is a versatile language that powers the web.";

// কাজ: একটি ফাংশন লেখো যা ২০টি অক্ষরের বেশি হলে স্ট্রিংটিকে কেটে ছোট করবে এবং শেষে ... যোগ করবে। আর ২০ অক্ষরের কম হলে যা আছে তাই দেখাবে।

const blogDescription =
  "JavaScript is a versatile language that powers the web.";

function getShortPreview(text, limit) {
  if (text.length > limit) {
    return text.slice(0, limit) + "...";
  }
  return text;
}

// ২. ক্রেডিট কার্ড মাস্কিং (Security Task)
// ব্যাংকিং অ্যাপে সিকিউরিটির জন্য কার্ডের মাঝখানের নাম্বারগুলো দেখানো হয় না। const cardNumber = "1234567890123456";

// কাজ: স্ট্রিং মেথড ব্যবহার করে কার্ডের প্রথম ৪টি এবং শেষ ৪টি ডিজিট ঠিক রেখে মাঝখানের ৮টি ডিজিটকে * দিয়ে রিপ্লেস করো। আউটপুট হবে: 1234********3456
const myCardNumber = "1234567890123456";

function maskSensitiveInfo(cardNumber) {
  const firstFour = cardNumber.slice(0, 4);
  const lastFour = cardNumber.slice(-4);
  const maskedMiddle = "*".repeat(8);

  return firstFour + maskedMiddle + lastFour;
}

// console.log(maskSensitiveInfo(myCardNumber));

// ৩. প্যালিনড্রোম চেক (Logic Challenge)
// প্যালিনড্রোম মানে হলো এমন একটি শব্দ যা সোজা দিক থেকে এবং উল্টো দিক থেকে পড়লে একই হয় (যেমন: "madam", "racecar")।

// কাজ: একটি ফাংশন লেখো যা চেক করবে একটি স্ট্রিং প্যালিনড্রোম কি না। যদি হয় তবে true আর না হলে false রিটার্ন করবে।

function checkPalindrome(word) {
  if (typeof word !== "string") return "Invalid Input";

  const cleanWord = word.toLowerCase();
  const reversedWord = cleanWord.split("").reverse().join("");

  return cleanWord === reversedWord;
}

// console.log(checkPalindrome("Madam"));

// ৪. স্পেস কাউন্টার (Word Count Challenge)
// ইউজাররা যখন কোনো প্যারাগ্রাফ লেখে, আমাদের চেক করতে হয় সেখানে কয়টি শব্দ আছে। const bio = "I am a web developer and instructor.";

// কাজ: একটি ফাংশন লেখো যা স্ট্রিংটি থেকে মোট কয়টি শব্দ (Word) আছে তা গুনে বের করবে।

const userBio = "I am a web developer and instructor.";

function getTotalWords(sentence) {
  const wordsArray = sentence.trim().split(" ");
  return wordsArray.length;
}

// console.log(getTotalWords(userBio));

// ৫. সেনসিটিভ ডাটা হাইড (Privacy Masking)
// ইউজারের নামের প্রথম ৩টি অক্ষর ঠিক রেখে বাকিটুকু ঢেকে দিতে হবে। const secretName = "Solaiman";

// কাজ: এমনভাবে কোড করো যেন আউটপুট আসে: Sol***** (নাম বড়-ছোট যাই হোক, ৩ অক্ষরের পর বাকিটুকু স্টার হবে)।

const fullName = "Solaiman Khan";

function hideNameDetails(name) {
  const visiblePart = name.slice(0, 3);
  const hiddenPart = "*".repeat(5);
  return visiblePart + hiddenPart;
}

// console.log(hideNameDetails(fullName));

// ৬. ক্যারেক্টার ক্লিনআপ (Symbol Remover)
// অনেক সময় ডাটাবেজে ডাটা সেভ করার আগে আমাদের স্ট্রিং থেকে অপ্রয়োজনীয় চিহ্ন সরাতে হয়। const messyString = "Hello@JS#is%Fun!";

// কাজ: এই @, #, এবং % চিহ্নগুলো সরিয়ে ফেলে একটি ফ্রেশ স্ট্রিং বানাও। আউটপুট হবে: Hello JS is Fun!

const messyString = "Hello@JS#is%Fun!";

// way-1
function messyStringRemove(str) {
  let result = [];

  for (let ch of str) {
    if (ch === "@" || ch === "#" || ch === "%" || ch === "$") {
      result.push(" ");
    } else {
      result.push(ch);
    }
  }

  return result.join("");
}

// way-2
function cleanSpecialSymbols(text) {
  return text.replaceAll("@", " ").replaceAll("#", " ").replaceAll("%", " ");
}

// console.log(cleanSpecialSymbols(dirtyData));

// ৭. মাল্টিপল নাম থেকে টাইটেল বের করা (Search Task)
// তোমার কাছে কিছু মানুষের নামের একটি অ্যারে আছে যারা ডক্টর (Dr.)। const doctors = ["Dr. Rakib", "Mr. Nayeem", "Dr. Sumon", "Mrs. Anika"];

// কাজ: লুপ এবং মেথড ব্যবহার করে শুধু সেই নামগুলো প্রিন্ট করো যারা ডাক্তার।

const personList = ["Dr. Rakib", "Mr. Nayeem", "Dr. Sumon", "Mrs. Anika"];

function getDoctorsOnly(list) {
  const doctors = [];
  for (const name of list) {
    if (name.startsWith("Dr.")) {
      doctors.push(name);
    }
  }
  return doctors;
}

// console.log(getDoctorsOnly(personList));
