# 🔐 N8N Environment Variables Setup

## Required Environment Variables

Set these in **n8n → Settings → Variables** (not inside individual nodes):

### 🔒 **Security & Authentication**

| Variable | Example Value | Description |
|----------|---------------|-------------|
| `RECAPTCHA_SECRET_KEY` | `6LcZAb4pAAAA...` | Google reCAPTCHA v3 secret key |
| `SUPABASE_URL` | `https://xyz.supabase.co` | Your Supabase project URL |
| `SUPABASE_KEY` | `eyJhbGciOiJIUzI1NiIs...` | Supabase service role key (not anon key) |
| `MIXPANEL_TOKEN` | `xxx-xxx` | Mixpanel project token for analytics |

### 📧 **Email Configuration**

| Variable | Example Value | Description |
|----------|---------------|-------------|
| `SENDER_EMAIL` | `noreply@callwaitingai.dev` | Email address for sending sequences |
| `SENDER_NAME` | `CallWaitingAI Team` | Display name for emails |
| `REPLY_TO_EMAIL` | `support@callwaitingai.dev` | Reply-to address for emails |

### 🚀 **API Configuration**

| Variable | Example Value | Description |
|----------|---------------|-------------|
| `PDF_API_URL` | `https://callwaitingai.dev/api/generate-report` | URL for PDF generation API |
| `RATE_LIMIT_PER_HOUR` | `10` | Rate limit per email address per hour |
| `WEBHOOK_SECRET` | `your-secret-key-here` | Secret for webhook validation |

### 🎯 **Business Configuration**

| Variable | Example Value | Description |
|----------|---------------|-------------|
| `BUSINESS_NAME` | `CallWaitingAI` | Your business name |
| `BUSINESS_URL` | `https://callwaitingai.dev` | Your website URL |
| `SUPPORT_PHONE` | `020 1234 5678` | Support phone number |
| `SUPPORT_EMAIL` | `support@callwaitingai.dev` | Support email address |

---

## 🔑 **Credentials Setup**

### **1. Gmail OAuth2 Credentials**
- Go to **n8n → Credentials → Gmail OAuth2**
- Connect with the email account that will send sequences
- **Recommended:** Use `noreply@callwaitingai.dev` or similar
- **Important:** Don't use personal Gmail accounts (they get throttled)

### **2. Supabase API Credentials**
- Go to **n8n → Credentials → Supabase API**
- Use your **service role key** (not the anon key)
- This allows n8n to insert data into your database

---

## 🛠️ **Setup Instructions**

### **Step 1: Create Google reCAPTCHA v3**
1. Go to [Google reCAPTCHA Admin Console](https://www.google.com/recaptcha/admin)
2. Create a new site with reCAPTCHA v3
3. Add your domain: `callwaitingai.dev`
4. Copy the **Secret Key** to `RECAPTCHA_SECRET_KEY`

### **Step 2: Set up Supabase**
1. Go to your Supabase project dashboard
2. Copy the **Project URL** to `SUPABASE_URL`
3. Go to **Settings → API**
4. Copy the **service_role** key to `SUPABASE_KEY`
5. Run the SQL setup script in **SQL Editor**

### **Step 3: Set up Mixpanel**
1. Create a Mixpanel project
2. Copy the **Project Token** to `MIXPANEL_TOKEN`
3. This will track conversion events

### **Step 4: Configure Email**
1. Set up your sending domain (recommended: `callwaitingai.dev`)
2. Use a service like SendGrid, Resend, or Brevo for better deliverability
3. Set `SENDER_EMAIL` to your verified sending address

---

## 🧪 **Testing Setup**

### **Test Mode Variables**
For testing, you can use these values:

| Variable | Test Value |
|----------|------------|
| `RECAPTCHA_SECRET_KEY` | `6LeIxAcTAAAAAGG-vFI1TnRWxMZNFuojJ4WifJWe` (Google's test key) |
| `RATE_LIMIT_PER_HOUR` | `100` (higher limit for testing) |
| `SENDER_EMAIL` | `test@callwaitingai.dev` |

### **Test Email Addresses**
- Use `test+roi@callwaitingai.dev` for testing
- Use `test+script@callwaitingai.dev` for script generator testing

---

## 🔍 **Validation Checklist**

Before going live, verify:

- [ ] All environment variables are set
- [ ] Gmail OAuth2 credentials are connected
- [ ] Supabase credentials are working
- [ ] reCAPTCHA is configured for your domain
- [ ] Email sending is tested
- [ ] Rate limiting is working
- [ ] Error handling is in place
- [ ] Analytics tracking is working

---

## 🚨 **Security Notes**

### **DO:**
- Use service role keys for Supabase (not anon keys)
- Set up rate limiting to prevent abuse
- Use HTTPS for all webhook URLs
- Store sensitive data in n8n credentials, not environment variables
- Test with dummy data first

### **DON'T:**
- Use personal Gmail accounts for automation
- Expose API keys in logs or responses
- Skip GDPR consent validation
- Use weak rate limiting
- Send emails without proper authentication

---

## 📊 **Monitoring Setup**

### **Key Metrics to Track:**
- Lead capture rate
- Email delivery rate
- Conversion rate by tool type
- High-value lead identification
- Rate limiting triggers
- Error rates

### **Alerts to Set Up:**
- High error rate in webhook
- Rate limiting being triggered frequently
- Email delivery failures
- Database connection issues
- reCAPTCHA failures

---

**🎯 Once all variables are set, import the workflow JSON and test with dummy data before going live!**
