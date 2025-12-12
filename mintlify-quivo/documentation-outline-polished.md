# Quivo Documentation Outline (Polished)

## Overview

This outline restructures the Quivo documentation to follow the Diátaxis framework, align with the user journey, and address critical gaps identified in the gap analysis. The structure separates **conceptual understanding** from **practical implementation**, and distinguishes between **API documentation** (for developers) and **Connector UI documentation** (for merchants using the web interface).

**Documentation Framework:** Mintlify (selected based on MVP evaluation)

**Key Principles (from team review):**
- Guides focus on "how to do" not "what each field means" (details in API Reference)
- Concise content with links to API Reference for detailed specifications
- Use tabs for request/response code examples
- Remove troubleshooting sections from guides (separate error codes page)
- Add "Next Steps" section with cards at end of each guide
- Use callouts for important warnings/tips/best practices

---

## I. Getting Started (Foundation)

**Purpose:** Establish context and vocabulary before diving into implementation.

### 1.1 Overview & Ecosystem (Concept)
- **Type:** Concept
- **Status:** ✅ Exists (`docs/getting-started/overview.mdx`)
- **Content:**
  - What is Quivo? (3PL provider, network, history)
  - Service models: Fulfillment Service vs. Send It Yourself
  - Transport services
  - API integration overview
  - Quick Start section with cards linking to main workflows
  - **Note:** Avoid marketing language, focus on technical information
  - **Note:** Use CardGroup component for workflow links

### 1.2 Logistics Glossary (Reference)
- **Type:** Reference
- **Status:** ✅ Exists (`docs/reference/logistics-glossary.mdx`)
- **Content:**
  - Essential terms: SKU, Inbound, Last Mile, Pick & Pack, Articles vs. Items
  - Order statuses and lifecycle
  - Warehouse terminology
  - Shipping terminology

### 1.3 Setting Up Your Account (How-To)
- **Type:** How-To Guide
- **Status:** ✅ Exists (`docs/getting-started/setup-account.mdx`)
- **Content:**
  - Account creation process
  - Accessing The Connector (web UI)
  - Obtaining API credentials
  - Seller ID identification
  - Environment selection (Production vs. Sandbox)

### 1.4 Making Your First API Call (Tutorial)
- **Type:** Tutorial
- **Status:** ✅ Exists (`docs/getting-started/first-api-call.mdx`)
- **Content:**
  - Step-by-step: Authentication flow
  - Obtaining bearer token
  - Making a simple API request
  - Understanding responses
  - Next steps

---

## II. Core Workflow: Fulfillment Service (API Guides)

**Purpose:** Complete end-to-end workflow for developers integrating via API.

**Standard Guide Template (from team review):**
1. **Introduction:** Brief explanation of what the guide covers and why
2. **Prerequisites:** Clear list of what's needed (session token, seller ID, etc.)
   - Link to relevant endpoints in API Reference (e.g., "Use the `/sellers` endpoint to find your seller ID")
   - Use callouts for important prerequisites
3. **Create the Request** (H2): 
   - Brief explanation
   - Example request (use tabs for code examples)
   - Link to API Reference for detailed field descriptions
4. **Response** (H3 under Request):
   - Example response
   - Brief explanation of key fields
5. **Next Steps** (H2):
   - Use CardGroup with 2-3 cards linking to related guides
   - Cards should have icons and brief descriptions

**Content Guidelines:**
- ❌ **Do NOT include:** "Required fields" sections (that's in API Reference)
- ❌ **Do NOT include:** Troubleshooting sections (separate error codes page)
- ❌ **Do NOT use:** Step 1, Step 2 numbering (unless truly sequential)
- ✅ **Do include:** Links to API Reference endpoints for detailed information
- ✅ **Do use:** Tabs for request/response code examples
- ✅ **Do use:** Callouts for important warnings/tips (e.g., webhook response requirements)

### 2.1 Product Catalog Management

#### 2.1.1 Create Products (Articles) (Tutorial)
- **Type:** Tutorial
- **Status:** ✅ Exists (`docs/guides/main-flow/create-products.mdx`)
- **Content:**
  - Creating your first article
  - Required vs. optional fields
  - SKU best practices
  - Product dimensions and weight
  - Next steps

#### 2.1.2 Manage Products (Articles) (How-To)
- **Type:** How-To Guide
- **Status:** ✅ Exists (`docs/guides/main-flow/manage-products.mdx`)
- **Content:**
  - Updating product information
  - Uploading product images
  - Product validation
  - Searching and retrieving articles
  - Bulk operations

#### 2.1.3 Manage Product Bundles (How-To) ⚠️ FUTURE
- **Type:** How-To Guide
- **Status:** ⚠️ Priority 4 (Optional)
- **Content:**
  - What are bundles?
  - Creating bundles
  - Bundle SKU mapping
  - Using bundles in orders

### 2.2 Inventory Management

#### 2.2.1 Send Inventory (Inbound) (Tutorial)
- **Type:** Tutorial
- **Status:** ✅ Exists (`docs/guides/main-flow/send-inventory.mdx`)
- **Content:**
  - Creating inbound records
  - Notifying warehouse of incoming shipments
  - Inbound status tracking
  - **Note:** Remove troubleshooting section (separate error codes page)
  - **Note:** Use tabs for request/response examples
  - **Note:** Link to `/inbounds` endpoint in API Reference for field details

#### 2.2.2 Monitor Inventory (Items API) (How-To)
- **Type:** How-To Guide
- **Status:** ✅ Exists (`docs/guides/inventory/monitor-stock.mdx`)
- **Content:**
  - Understanding Articles vs. Items (concept explanation)
  - Checking current stock levels
  - Viewing inventory by warehouse
  - Item history and movements
  - Inventory refresh operations
  - **Note:** Remove troubleshooting section (separate error codes page)
  - **Note:** Link to `/items` endpoint in API Reference

### 2.3 Order Fulfillment

#### 2.3.1 Create Fulfillment Order (Tutorial)
- **Type:** Tutorial
- **Status:** ✅ Exists (`docs/guides/main-flow/create-order.mdx`)
- **Content:**
  - Order payload structure (brief overview)
  - Key information: sellerId, orderIdentifier, deliveryAddress, positions
  - Using fulfillment plans (basic mention, detailed guide in Advanced section)
  - **Note:** Do NOT list "required fields" (link to API Reference instead)
  - **Note:** Use tabs for request/response examples
  - **Note:** Link to `/orders` POST endpoint in API Reference for detailed field descriptions
  - Next steps section with cards

#### 2.3.2 Manage Orders (How-To) ⚠️ MISSING - HIGH PRIORITY
- **Type:** How-To Guide
- **Status:** ⚠️ **CREATE NEXT**
- **Suggested Path:** `docs/guides/orders/manage-orders.mdx`
- **Content Structure:**
  - **Update Order Details** (H2): PATCH /orders/{orderId} with example
  - **Cancel Orders** (H2): Cancellation process with example
  - **Update Delivery Addresses** (H2): Address modification with example
  - **Understanding Order Statuses** (H2): Status transitions (concept)
  - **When Orders Can/Cannot Be Modified** (H2): Important callout/warning
  - **Note:** Remove "handling order errors" and "troubleshooting" (separate error codes page)
  - **Note:** Link to `/orders` PATCH endpoint in API Reference
  - **Note:** Use tabs for request/response examples
  - Next steps section with cards

#### 2.3.3 Track Order (How-To)
- **Type:** How-To Guide
- **Status:** ✅ Exists (`docs/guides/main-flow/track-order.mdx`)
- **Content:**
  - Retrieving order status
  - Tracking shipment progress
  - Understanding status codes
  - Delivery confirmation

### 2.4 Advanced Order Features

#### 2.4.1 Understanding Fulfillment Plans (Concept + How-To) ⚠️ MISSING - HIGH PRIORITY
- **Type:** Concept (explanation) + How-To (implementation)
- **Status:** ⚠️ **CREATE NEXT**
- **Suggested Path:** `docs/guides/advanced/fulfillment-plans.mdx`
- **Content:**
  - **Concept Section:**
    - What are Fulfillment Plans?
    - When to use Fulfillment Plans
    - Conditional logic overview (When/Then)
    - SKU mapping and forking
  - **How-To Section:**
    - Creating conditional logic rules
    - Preview API for testing
    - Using Fulfillment Plans in orders
    - Common use cases and examples
    - Troubleshooting

### 2.5 Shipment Management

#### 2.5.1 Manage Shipments (How-To) ⚠️ MISSING - MEDIUM PRIORITY
- **Type:** How-To Guide
- **Status:** ⚠️ **CREATE AFTER PRIORITY 2**
- **Suggested Path:** `docs/guides/shipments/manage-shipments.mdx`
- **Content:**
  - Booking shipments manually
  - Retrieving shipping labels and documents
  - Shipment status tracking (beyond order tracking)
  - Pickup scheduling
  - Batch shipment operations
  - Shipment estimation

### 2.6 Post-Fulfillment

#### 2.6.1 Manage Returns (How-To)
- **Type:** How-To Guide
- **Status:** ✅ Exists (`docs/guides/main-flow/manage-returns.mdx`)
- **Content:**
  - Generating return labels
  - Processing returned items
  - Return status tracking
  - Return portal configuration

#### 2.6.2 Manage Webhooks (How-To)
- **Type:** How-To Guide
- **Status:** ✅ Exists (`docs/guides/main-flow/manage-webhooks.mdx`)
- **Content Structure:**
  - **Important Callout at top:** Webhook endpoints must return 200 OK response
  - **Create a Subscription** (H2): POST request with example
  - **List Subscriptions** (H2): GET request with example
  - **Delete Subscription** (H2): DELETE request with example
  - **Best Practices** (H2): Use callout for automation tips (token refresh, etc.)
  - **Note:** Remove "troubleshooting" section (separate error codes page)
  - **Note:** Use tabs for request/response examples
  - **Note:** Link to `/webhooks` endpoints in API Reference
  - Next steps section with cards

---

## III. The Connector: User Guide (Web UI)

**Purpose:** Documentation for merchants using The Connector web interface (non-technical users).

**Note:** This section may be maintained separately or integrated. Clarify with stakeholders whether this should be:
- A separate documentation site
- A section within this documentation
- Links to external Connector documentation

### 3.1 Getting Started with The Connector

#### 3.1.1 Dashboard Overview (Concept)
- **Type:** Concept
- **Content:**
  - Navigation overview
  - Key metrics and KPIs
  - Quick actions
  - Settings access

### 3.2 Inventory Management (UI)

#### 3.2.1 Creating Products and Bundles (How-To)
- **Type:** How-To Guide
- **Content:**
  - Adding products via UI
  - Product form fields
  - Uploading images
  - Creating bundles
  - Bulk import options

#### 3.2.2 Requesting an Inbound (How-To)
- **Type:** How-To Guide
- **Content:**
  - Creating inbound requests via UI
  - Uploading packing lists
  - Tracking inbound status
  - Warehouse selection

### 3.3 Order Management (UI)

#### 3.3.1 Understanding Order Statuses (Concept)
- **Type:** Concept
- **Content:**
  - Status definitions: Processing, Shipped, On Hold, etc.
  - Status transition flow
  - Visual indicators
  - Status filters

#### 3.3.2 Address Validation & Troubleshooting (How-To)
- **Type:** How-To Guide
- **Content:**
  - Address validation process
  - Common validation errors
  - Manual address correction
  - International address formats

### 3.4 Reverse Logistics (UI)

#### 3.4.1 Configuring the Return Portal (How-To)
- **Type:** How-To Guide
- **Content:**
  - Return portal setup
  - Return policy configuration
  - Return reasons and categories
  - Customer-facing return links

#### 3.4.2 Processing a Received Return (How-To)
- **Type:** How-To Guide
- **Content:**
  - Viewing returned items
  - Return inspection
  - Restocking vs. disposal
  - Return status updates

### 3.5 Integrations (No-Code)

#### 3.5.1 Connecting Shop Systems (How-To)
- **Type:** How-To Guide
- **Content:**
  - Supported platforms (Shopify, WooCommerce, Magento, etc.)
  - Connection setup wizard
  - Authentication and permissions
  - Testing connections

#### 3.5.2 Status Mapping (Concept + How-To)
- **Type:** Concept + How-To
- **Content:**
  - Understanding status mapping
  - Source system statuses vs. Quivo statuses
  - Configuring mappings
  - Troubleshooting sync issues

---

## IV. API Reference (Technical Reference)

**Purpose:** Complete, precise API specification for developers.

### 4.1 Introduction (Reference)
- **Type:** Reference
- **Status:** ✅ Exists (`api-reference/introduction.mdx`)
- **Content:**
  - API overview
  - Base URLs (Production, Sandbox)
  - Quick links to Quick Start guides
  - Links to authentication guide
  - **Additional sections to add:**
    - Response codes (common HTTP status codes)
    - Pagination (how pagination is handled in the API)
    - Idempotency (if applicable, how idempotency is handled)
    - Rate limits
    - Versioning
    - Response formats

### 4.2 Authentication (Reference)
- **Type:** Reference
- **Status:** ✅ Exists (`api-reference/authentication.mdx`)
- **Content:**
  - **Introduction:** Explain that Quivo API uses authorization token for authenticating requests
  - **Obtaining API Key:** How to retrieve static API key from dashboard
  - **Obtaining Session Token:** POST /login endpoint with example
  - **Using Token in Requests:** How to include token in Authorization header
  - **Token Expiration:** 1-hour validity, what to do when receiving 401 error
  - **Best Practice Callout:** Automate token refresh (since tokens expire after 1 hour)
  - **Note:** This guide is in API Reference, NOT in Guides section
  - **Note:** Link to `/login` endpoint in API Reference
  - Next steps section with cards (2 cards max)

### 4.3 Endpoints (Reference)
- **Type:** Reference
- **Status:** ✅ Auto-generated from OpenAPI (`openapi.json`)
- **Content:**
  - Complete endpoint documentation
  - Request/response schemas
  - Parameters and examples
  - **Playground Feature:** "Try it" button allows testing endpoints directly in documentation
  - **Code Examples:** Multiple language options (curl, Python, JavaScript, PHP, Go, Java)
  - **Note:** Descriptions are added via OpenAPI overlay layer
  - **Note:** When new endpoints are added, overlay layer is updated manually

**Note:** Endpoints are organized by tags (can be reorganized by importance or grouped by resource):
- `articles` - Product catalog
- `inbounds` - Inventory shipments
- `items` - Stock levels
- `orders` - Order management
- `shipments` - Shipment operations
- `returns` - Return processing
- `fulfillmentPlans` - Conditional logic
- `webhooks` - Event subscriptions
- `addresses` - Address management
- `shops` - Shop integrations
- And more...

### 4.4 Error Codes (Reference) ⚠️ MISSING
- **Type:** Reference
- **Status:** ⚠️ **CREATE** (separate from guides)
- **Suggested Path:** `api-reference/error-codes.mdx`
- **Content:**
  - Complete list of HTTP status codes
  - Common error codes and meanings
  - Error response format
  - Troubleshooting guidance
  - **Note:** This replaces troubleshooting sections in individual guides

---

## V. Advanced Topics & Configuration

**Purpose:** Specialized topics for advanced use cases.

### 5.1 Address Management (How-To) ⚠️ FUTURE
- **Type:** How-To Guide
- **Status:** ⚠️ Priority 4 (Optional)
- **Suggested Path:** `docs/guides/configuration/addresses.mdx`
- **Content:**
  - Managing stored addresses
  - Setting default return addresses
  - Address validation
  - International address handling

### 5.2 International Shipping (Concept + How-To) ⚠️ FUTURE
- **Type:** Concept + How-To
- **Status:** ⚠️ Priority 4 (Optional)
- **Suggested Path:** `docs/guides/international/international-shipping.mdx`
- **Content:**
  - Customs documentation
  - Tariffs and duties
  - Gulf Region (GWC) expansion
  - Regional shipping requirements
  - Compliance and regulations

### 5.3 SDKs & Tools (Reference) ⚠️ FUTURE
- **Type:** Reference
- **Status:** ⚠️ If applicable
- **Content:**
  - Available SDKs (if any)
  - Code examples
  - Installation instructions
  - Community tools

---

## VI. Support & Resources

**Purpose:** Help users find answers and get support.

### 6.1 Technical FAQ (Reference)
- **Type:** Reference
- **Content:**
  - Common API questions
  - Best practices
  - **Note:** Error code explanations are in separate Error Codes page (4.4)

### 6.2 Operational FAQ (Reference)
- **Type:** Reference
- **Content:**
  - Warehouse operations
  - Shipping questions
  - Return processing
  - Billing and accounts

### 6.3 Status Page (Link)
- **Type:** External Link
- **Content:**
  - Link to system availability page
  - Incident history
  - Maintenance schedules

### 6.4 Contact Support (How-To)
- **Type:** How-To Guide
- **Content:**
  - Support channels
  - When to contact support
  - Information to provide
  - Response times

---

## Navigation Structure (docs.json)

### Recommended Navigation Organization

```json
{
  "navigation": {
    "tabs": [
      {
        "tab": "Home",
        "pages": ["index"]
      },
      {
        "tab": "Guides",
        "groups": [
          {
            "group": "Getting Started",
            "pages": [
              "docs/getting-started/overview",
              "docs/getting-started/setup-account",
              "docs/getting-started/first-api-call"
            ]
          },
          {
            "group": "Core Workflow",
            "pages": [
              "docs/guides/main-flow/create-products",
              "docs/guides/main-flow/manage-products",
              "docs/guides/main-flow/send-inventory",
              "docs/guides/inventory/monitor-stock",
              "docs/guides/main-flow/create-order",
              "docs/guides/orders/manage-orders",
              "docs/guides/main-flow/track-order",
              "docs/guides/main-flow/manage-returns",
              "docs/guides/main-flow/manage-webhooks"
            ]
          },
          {
            "group": "Advanced",
            "pages": [
              "docs/guides/advanced/fulfillment-plans",
              "docs/guides/shipments/manage-shipments"
            ]
          },
          {
            "group": "Reference",
            "pages": [
              "docs/reference/logistics-glossary"
            ]
          }
        ]
      },
      {
        "tab": "API Reference",
        "groups": [
          {
            "group": "Introduction",
            "pages": [
              "api-reference/introduction",
              "api-reference/authentication"
            ]
          },
          {
            "group": "Endpoints",
            "openapi": {
              "source": "/openapi.json",
              "directory": "api"
            }
          }
        ]
      }
    ]
  }
}
```

---

## Implementation Roadmap

### Phase 1: Critical Gaps (Immediate)
1. ✅ **Create Products** - COMPLETED
2. ✅ **Manage Products** - COMPLETED
3. ⚠️ **Manage Orders** - CREATE NEXT (High Priority)
4. ⚠️ **Fulfillment Plans** - CREATE NEXT (High Priority)
5. ⚠️ **Error Codes Page** - CREATE (Separate from guides, consolidates troubleshooting)

### Phase 2: Workflow Completion (Short-term)
5. ⚠️ **Manage Shipments** - CREATE AFTER Phase 1 (Medium Priority)

### Phase 3: Enhancement (Medium-term)
6. Product Bundles (Optional)
7. Address Management (Optional)
8. International Shipping (Optional)

### Phase 4: Connector UI Documentation (Long-term)
9. Determine integration approach (separate site vs. integrated)
10. Create Connector UI guides based on user research

---

## Documentation Standards & Best Practices

### Page Structure Template

**For Guides (Tutorials & How-To):**
```markdown
---
title: "Clear, specific title"
description: "Concise description for SEO (not rendered in page)"
---

Brief introduction explaining what this guide covers and why.

## Prerequisites

- **Session Token:** [Link to authentication guide]
- **Seller ID:** Use the `/sellers` endpoint to find it
- **Other requirements:** [Link to relevant endpoints]

## Create the Request

Brief explanation of what you're doing.

<Tabs>
  <Tab title="Request">
    ```bash
    curl example...
    ```
  </Tab>
  <Tab title="Response">
    ```json
    response example...
    ```
  </Tab>
</Tabs>

### Response

Brief explanation of key fields. For detailed field descriptions, see the [API Reference](/api-reference/endpoint).

## Next Steps

<CardGroup cols={2}>
  <Card title="Related Guide" icon="icon-name" href="/path">
    Brief description
  </Card>
</CardGroup>
```

### Content Guidelines

**Do:**
- ✅ Link to API Reference for detailed field descriptions
- ✅ Use tabs for request/response code examples
- ✅ Use callouts for important warnings/tips/best practices
- ✅ Keep content concise and goal-oriented
- ✅ Add "Next Steps" section with 2-3 cards at end of each guide
- ✅ Use H2 for main sections, H3 for subsections
- ✅ Remove "ogDescription" from frontmatter (use "description" only)

**Don't:**
- ❌ Include "Required fields" sections (that's in API Reference)
- ❌ Include troubleshooting sections (separate error codes page)
- ❌ Use Step 1, Step 2 numbering (unless truly sequential)
- ❌ Include marketing language
- ❌ Duplicate information that's in API Reference
- ❌ Use "description" in frontmatter if it will render on page (use "ogDescription" instead)

### Callout Usage

- **`<Note>`**: Helpful supplementary information
- **`<Tip>`**: Best practices and expert advice
- **`<Warning>`**: Important cautions (yellow)
- **`<Info>`**: Neutral contextual information
- **`<Danger>`**: Rarely used, only for critical warnings

### Mintlify Features

- **Dashboard:** Web-based editor for non-technical team members
- **Playground:** "Try it" feature for testing API endpoints
- **AI Assistant:** Built-in chat for documentation questions (free plan)
- **Branching:** Staging environments for review before publishing
- **Auto-updates:** OpenAPI spec fetched daily, overlay layer updated manually

---

## Key Improvements from Draft

### 1. **Diátaxis Framework Alignment**
- Clearly labeled page types (Concept, Tutorial, How-To, Reference)
- Concepts explain "why" and "what"
- Tutorials provide guided learning
- How-To guides offer goal-oriented steps
- Reference provides precise specifications

### 2. **Logical User Journey**
- Follows the fulfillment workflow sequence
- Prerequisites clearly identified
- Cross-references between related topics
- Progressive complexity (basic → advanced)

### 3. **Gap Analysis Integration**
- High-priority gaps identified and prioritized
- Missing topics clearly marked
- Implementation roadmap included

### 4. **Separation of Concerns**
- API documentation (developer-focused)
- Connector UI documentation (merchant-focused)
- Clear distinction between technical and non-technical content

### 5. **Enhanced Structure**
- More granular organization
- Better grouping of related topics
- Clear navigation hierarchy
- Support section for help resources

---

## Questions for Clarification

1. **The Connector Documentation:**
   - Should Connector UI documentation be integrated into this site or maintained separately?
   - Do you have existing Connector UI documentation to reference?
   - What is the priority for Connector UI docs vs. API docs?

2. **Fulfillment Plans:**
   - Do you have detailed examples or use cases for Fulfillment Plans?
   - What level of technical detail is needed?

3. **International Shipping:**
   - Is there specific documentation for GWC region requirements?
   - What customs/tariff information should be included?

4. **SDKs:**
   - Are there official SDKs available?
   - Which languages/platforms are supported?

5. **Navigation:**
   - Should "The Connector" be a separate tab or integrated into Guides?
   - How should we handle the distinction between API and UI workflows?

6. **OpenAPI Updates:**
   - What's the preferred frequency for OpenAPI spec updates? (Currently daily)
   - Who should be notified when new endpoints are added?
   - What's the review process for overlay layer updates?

7. **Error Codes:**
   - Do you have a complete list of error codes and their meanings?
   - Should error codes be organized by endpoint or by error type?

---

## Next Steps

1. **Review and approve** this outline structure
2. **Prioritize** missing documentation (Manage Orders, Fulfillment Plans)
3. **Clarify** questions above
4. **Begin implementation** of Phase 1 critical gaps
5. **Gather source materials** for Connector UI documentation (if applicable)