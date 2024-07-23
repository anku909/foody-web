const partnerOnBoarding = [
  {
    id: 1,
    title: "I want to partner my restaurant with foody",
    description: null,
    conversationId: null,
    layerConversationId: null,
    ackText: null,
    isLeaf: true,
    isBackupNode: false,
    isResolutionNode: true,
    hyperLinkText: "Partner with us",
    hyperLink: "https://www.foody.com/partner-with-us/",
  },
  {
    id: 2,
    title:
      "What are the mandatory documents needed to list my restaurant on foody?",
    description:
      "-Copies of the below documents are mandatory\n-FSSAI Licence OR FSSAI Acknowledgement\n-Pan Card\n-GSTIN Certificate\n-Cancelled Cheque OR bank Passbook\n-Menu",
    conversationId: null,
    layerConversationId: null,
    ackText: null,
    isLeaf: true,
    isBackupNode: false,
    isResolutionNode: true,
    options: [],
    hyperLinkText: null,
    hyperLink: null,
  },
  {
    id: 3,
    title: "I want to opt-out from Google reserve",
    description: null,
    conversationId: null,
    layerConversationId: null,
    ackText: null,
    isLeaf: true,
    isBackupNode: false,
    isResolutionNode: false,
    options: [],
    hyperLinkText: null,
    hyperLink:
      "https://docs.google.com/forms/d/e/1FAIpQLSe6flk-RRljUCRCsCVnHIyUXxjs8CuYTSGwRHjhzGMNA27gnw/viewform",
  },
  {
    id: 4,
    title:
      "After I submit all documents, how long will it take for my restaurant to go live on foody?",
    description:
      "After all mandatory documents have been received and verified it takes upto 7-10 working days for the onboarding to be completed and make your restaurant live on the platform.",
    conversationId: null,
    layerConversationId: null,
    ackText: null,
    isLeaf: true,
    isBackupNode: false,
    isResolutionNode: true,
    options: [],
    hyperLinkText: null,
    hyperLink: null,
  },
  {
    id: 4,
    title:
      "What is this one time Onboarding fees? Do I have to pay for it while registering?",
    description:
      "This is a one-time fee charged towards the system & admin costs incurred during the onboarding process. It is deducted from the weekly payouts after you start receiving orders from foody.",
    conversationId: null,
    layerConversationId: null,
    ackText: null,
    isLeaf: true,
    isBackupNode: false,
    isResolutionNode: true,
    options: [],
    hyperLinkText: null,
    hyperLink: null,
  },
  {
    id: 5,
    title:
      "Who should I contact if I need help & support in getting onboarded?",
    description:
      "You can connect with Partner Support on 080-67466777/68179777 or write to partnersuport@foody.in",
    conversationId: null,
    layerConversationId: null,
    ackText: null,
    isLeaf: true,
    isBackupNode: false,
    isResolutionNode: true,
    options: [
      {
        type: "email",
        phoneNumber: null,
        provider: null,
        waitTime: "We will revert within 24-48 hrs",
        emailId: "partnersupport@foody.in",
      },
    ],
    hyperLinkText: null,
    hyperLink: null,
  },
  {
    id: 6,
    title: "How much commission will I be charged by foody?",
    description:
      "The commission charges vary for different cities. You will be able to see the commission applicable for you once the preliminary onboarding details have been filled.",
    conversationId: null,
    layerConversationId: null,
    ackText: null,
    isLeaf: true,
    isBackupNode: false,
    isResolutionNode: true,
    options: [],
    hyperLinkText: null,
    hyperLink: null,
  },
  {
    id: 7,
    title:
      "I don't have an FSSAI licence for my restaurant. Can it still be onboarded?",
    description:
      "FSSAI licence is a mandatory requirement according to the government's policies. However, if you are yet to receive the licence at the time of onboarding, you can proceed with the acknowledgement number which you will have received from FSSAI for your registration.",
    conversationId: null,
    layerConversationId: null,
    ackText: null,
    isLeaf: true,
    isBackupNode: false,
    isResolutionNode: true,
    options: [],
    hyperLinkText: null,
    hyperLink: null,
  },
];

const faqs = [
  {
    id: 1,
    title: "What is foody Customer Care Number?",
    description:
      "We value our customer’s time and hence moved away from a single customer care number to a comprehensive chat-based support system for quick and easy resolution. You no longer have to go through the maze of an IVRS call support. Just search for your issue in the help section on this page and initiate a chat with us. A customer care executive will be assigned to you shortly. You can also email us your issue on support@foody.in\n\nNote: We value your privacy and your information is safe with us. Please do not reveal any personal information, bank account number, OTP etc. to another person. A foody representative will never ask you for these details. Please do not reveal these details to fraudsters and imposters claiming to be calling on our behalf. Be vigilant and do not entertain phishing calls or emails.",
    conversationId: null,
    layerConversationId: null,
    ackText: null,
    isLeaf: true,
    isBackupNode: false,
    isResolutionNode: true,
    options: [
      {
        type: "email",
        phoneNumber: null,
        provider: null,
        waitTime: "We will revert within 24-48 hrs",
        emailId: "support@foody.in",
      },
    ],
    hyperLinkText: null,
    hyperLink: null,
  },
  {
    id: 2,
    title: "I want to explore career opportunities with foody",
    description: null,
    conversationId: null,
    layerConversationId: null,
    ackText: null,
    isLeaf: true,
    isBackupNode: false,
    isResolutionNode: true,
    options: [
      {
        type: "email",
        phoneNumber: null,
        provider: null,
        waitTime: "We will revert within 24-48 hrs",
        emailId: "careers@foody.in",
      },
    ],
    hyperLinkText: "Join our team",
    hyperLink: "https://www.foody.com/careers?hide_header=ios_android",
  },
  {
    id: 3,
    title: "I want to provide feedback",
    description: null,
    conversationId: null,
    layerConversationId: null,
    ackText: null,
    isLeaf: true,
    isBackupNode: false,
    isResolutionNode: true,
    options: [
      {
        type: "email",
        phoneNumber: null,
        provider: null,
        waitTime: "We will revert within 24-48 hrs",
        emailId: "support@foody.in",
      },
    ],
    hyperLinkText: null,
    hyperLink: null,
  },
  {
    id: 4,
    title: "Can I edit my order?",
    description:
      "Your order can be edited before it reaches the restaurant. You could contact customer support team via chat or call to do so. Once order is placed and restaurant starts preparing your food, you may not edit its contents",
    conversationId: null,
    layerConversationId: null,
    ackText: null,
    isLeaf: true,
    isBackupNode: false,
    isResolutionNode: true,
    options: [],
    hyperLinkText: null,
    hyperLink: null,
  },
  {
    id: 5,
    title: "I want to cancel my order",
    description:
      "We will do our best to accommodate your request if the order is not placed to the restaurant (Customer service number:  080-67466729). Please note that we will have a right to charge a cancellation fee up to full order value to compensate our restaurant and delivery partners if your order has been confirmed.",
    conversationId: null,
    layerConversationId: null,
    ackText: null,
    isLeaf: true,
    isBackupNode: false,
    isResolutionNode: true,
    options: [],
    hyperLinkText: null,
    hyperLink: null,
  },
  {
    id: 6,
    title: "Will foody be accountable for quality/quantity? ",
    description:
      "Quantity and quality of the food is the restaurants' responsibility. However in case of issues with the quality or quantity, kindly submit your feedback and we will pass it on to the restaurant.",
    conversationId: null,
    layerConversationId: null,
    ackText: null,
    isLeaf: true,
    isBackupNode: false,
    isResolutionNode: true,
    options: [],
    hyperLinkText: null,
    hyperLink: null,
  },
  {
    id: 7,
    title: "Is there a minimum order value?",
    description:
      "We have no minimum order value and you can order for any amount. ",
    conversationId: null,
    layerConversationId: null,
    ackText: null,
    isLeaf: true,
    isBackupNode: false,
    isResolutionNode: true,
    options: [],
    hyperLinkText: null,
    hyperLink: null,
  },
  {
    id: 8,
    title: "Do you charge for delivery?",
    description:
      "Delivery fee varies from city to city and is applicable if order value is below a certain amount. Additionally, certain restaurants might have fixed delivery fees. Delivery fee (if any) is specified on the 'Review Order' page. ",
    conversationId: null,
    layerConversationId: null,
    ackText: null,
    isLeaf: true,
    isBackupNode: false,
    isResolutionNode: true,
    options: [],
    hyperLinkText: null,
    hyperLink: null,
  },
  {
    id: 9,
    title: "How long do you take to deliver?",
    description:
      "Standard delivery times vary by the location selected and prevailing conditions. Once you select your location, an estimated delivery time is mentioned for each restaurant.",
    conversationId: null,
    layerConversationId: null,
    ackText: null,
    isLeaf: true,
    isBackupNode: false,
    isResolutionNode: true,
    options: [],
    hyperLinkText: null,
    hyperLink: null,
  },
  {
    id: 10,
    title: "What are your delivery hours?",
    description:
      "Our delivery hours vary for different locations and depends on availability of supply from restaurant partners.",
    conversationId: null,
    layerConversationId: null,
    ackText: null,
    isLeaf: true,
    isBackupNode: false,
    isResolutionNode: true,
    options: [],
    hyperLinkText: null,
    hyperLink: null,
  },
];

export { partnerOnBoarding, faqs };
