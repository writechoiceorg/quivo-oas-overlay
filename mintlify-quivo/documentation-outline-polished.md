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

## Documentation Status

**Last Updated:** December 2025

### ✅ Complete (Production Ready)

**Introduction Section:**
- ✅ Overview (Concept)
- ✅ Integrating with Quivo (Concept)
- ✅ Logistics Glossary (Reference)
- ✅ Making Your First API Call (Tutorial)
- ✅ Request an API Key (How-To)

**Quickstart Section:**
- ✅ Send Inventory (Inbound) (Tutorial)
- ✅ Create a Fulfillment Order (Tutorial)
- ✅ Track an Order (How-To)
- ✅ Manage Returns (How-To)
- ✅ Manage Webhooks (How-To)

**Quivo Flows Section:**
- ✅ Create Products (Articles) (Tutorial)
- ✅ Manage Products (Articles) (How-To)
- ✅ Monitor Inventory (Items API) (How-To)

**API Reference Section:**
- ✅ API Overview (Reference)
- ✅ Authentication (Reference)
- ✅ API Endpoints (Auto-generated from OpenAPI)

**Quality Standards Applied:**
- ✅ Consistent callout usage (`<Note>`, `<Tip>`, `<Warning>`)
- ✅ All code examples use `<Tabs>` with Request/Response
- ✅ Introductory sentences in all tab elements
- ✅ Standardized "Where to go next" sections with CardGroup
- ✅ All API links use `/api-reference/#tag/...` format
- ✅ Prerequisites standardized across all guides
- ✅ Base URL phrasing standardized

### 🔄 In Progress / Needs Review

**None currently** - All existing documentation has been standardized and reviewed.

### ⚠️ Missing - High Priority

**Quivo Flows Section:**
- ⚠️ Manage Orders (How-To) - **CREATE NEXT**
  - Update order details, cancel orders, update delivery addresses
  - Understanding order statuses and modification rules

- ⚠️ Fulfillment Plans (Concept + How-To) - **CREATE NEXT**
  - What are fulfillment plans?
  - Creating and managing fulfillment plans
  - Using plans in orders

**API Reference Section:**
- ⚠️ Environments (Reference)
  - Production vs. Sandbox base URLs
  - Environment-specific configuration

- ⚠️ HTTP Response Codes (Reference)
  - Complete list of status codes
  - Error response formats
  - Troubleshooting guide

- ⚠️ Pagination & Idempotency (Reference)
  - How pagination works
  - Idempotency keys and best practices

### ⚠️ Missing - Medium Priority

**Quivo Flows Section:**
- ⚠️ Manage Shipments (How-To)
  - Shipment tracking and management
  - Carrier integration details

**Connector Web UI Section:**
- ⚠️ The Connector Overview (Concept)
- ⚠️ Managing Inventory via UI (How-To)
- ⚠️ Creating Orders via UI (How-To)
- ⚠️ Requesting an Inbound (UI) (How-To)

### ⚠️ Missing - Low Priority / Optional

**Quivo Flows Section:**
- ⚠️ Manage Product Bundles (How-To) - Priority 4
- ⚠️ International Shipping & Customs (How-To) - Priority 4

**Support Section:**
- ⚠️ SDKs & Libraries (Reference) - If applicable
- ⚠️ Community Resources (Reference) - If applicable

### 📊 Completion Statistics

- **Total Pages Planned:** ~35
- **Pages Complete:** 15 (43%)
- **Pages Missing (High Priority):** 5 (14%)
- **Pages Missing (Medium Priority):** 5 (14%)
- **Pages Missing (Low Priority):** 4 (11%)
- **Auto-generated:** 1 (API Endpoints)

**Next Milestone:** Complete all High Priority missing pages (5 pages)

---

## I. Introduction

**Purpose:** Establish context and vocabulary before diving into implementation.

### 1.1 Overview (Concept)
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

### 1.2 Integrating with Quivo (Concept)
- **Type:** Concept
- **Status:** ✅ Exists (`docs/getting-started/integrating-with-quivo.mdx`)
- **Content:**
  - Accessing The Connector (web UI)
  - Obtaining API credentials
  - Identifying your Seller ID
  - Selecting the correct environment (Production vs. Sandbox)

### 1.3 Logistics Glossary (Reference)
- **Type:** Reference
- **Status:** ✅ Exists (`docs/reference/logistics-glossary.mdx`)
- **Content:**
  - Essential terms: SKU, Inbound, Last Mile, Pick & Pack, Articles vs. Items
  - Order statuses and lifecycle
  - Warehouse terminology
  - Shipping terminology

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

## II. Quickstart

**Purpose:** Provide a clear, step-by-step documentation of the typical customer journey (from sending inventory to managing returns). These are the primary entry-point guides for new integrations.

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

### 2.1 Send Inventory (Inbound) (Tutorial)
- **Type:** Tutorial
- **Status:** ✅ Exists (`docs/guides/main-flow/send-inventory.mdx`)
- **Content:**
  - Creating inbound records
  - Notifying warehouse of incoming shipments
  - Inbound status tracking
  - **Note:** Remove troubleshooting section (separate error codes page)
  - **Note:** Use tabs for request/response examples
  - **Note:** Link to `/inbounds` endpoint in API Reference for field details

### 2.2 Create a Fulfillment Order (Tutorial)
- **Type:** Tutorial
- **Status:** ✅ Exists (`docs/guides/main-flow/create-order.mdx`)
- **Content:**
  - Order payload structure (brief overview)
  - Key information: `sellerId`, `orderIdentifier`, `deliveryAddress`, `positions`
  - Basic use of fulfillment plans (link to dedicated Fulfillment Plans guide)
  - **Note:** Do NOT list "required fields" (link to API Reference instead)
  - **Note:** Use tabs for request/response examples
  - **Note:** Link to `/orders` POST endpoint in API Reference for detailed field descriptions
  - Next steps section with cards

### 2.3 Track an Order (How-To)
- **Type:** How-To Guide
- **Status:** ✅ Exists (`docs/guides/main-flow/track-order.mdx`)
- **Content:**
  - Retrieving order status
  - Tracking shipment progress
  - Understanding status codes
  - Delivery confirmation

### 2.4 Manage Returns (How-To)
- **Type:** How-To Guide
- **Status:** ✅ Exists (`docs/guides/main-flow/manage-returns.mdx`)
- **Content:**
  - Generating return labels
  - Processing returned items
  - Return status tracking
  - Return portal configuration

### 2.5 Manage Webhooks (How-To)
- **Type:** How-To Guide
- **Status:** ✅ Exists (`docs/guides/main-flow/manage-webhooks.mdx`)
- **Content Structure:**
  - **Important Callout at top:** Webhook endpoints must return `200 OK` response
  - **Create a Subscription** (H2): POST request with example
  - **List Subscriptions** (H2): GET request with example
  - **Delete Subscription** (H2): DELETE request with example
  - **Best Practices** (H2): Use callout for automation tips (token refresh, etc.)
  - **Note:** Remove "troubleshooting" section (separate error codes page)
  - **Note:** Use tabs for request/response examples
  - **Note:** Link to `/webhooks` endpoints in API Reference
  - Next steps section with cards

---

## III. Quivo Flows

**Purpose:** Provide more detailed, resource-specific guides that cover the broader Quivo API workflows beyond the initial Quickstart.

### 3.1 Manage Orders (How-To) ⚠️ MISSING - HIGH PRIORITY
- **Type:** How-To Guide
- **Status:** ⚠️ **CREATE NEXT**
- **Suggested Path:** `docs/guides/orders/manage-orders.mdx`
- **Content Structure:**
  - **Update Order Details** (H2): `PATCH /orders/{orderId}` with example
  - **Cancel Orders** (H2): Cancellation process with example
  - **Update Delivery Addresses** (H2): Address modification with example
  - **Understanding Order Statuses** (H2): Status transitions (concept)
  - **When Orders Can/Cannot Be Modified** (H2): Important callout/warning
  - **Note:** Remove "handling order errors" and "troubleshooting" (separate error codes page)
  - **Note:** Link to `/orders` PATCH endpoint in API Reference
  - **Note:** Use tabs for request/response examples
  - Next steps section with cards

### 3.2 Create Products (Articles) (Tutorial)
- **Type:** Tutorial
- **Status:** ✅ Exists (`docs/guides/main-flow/create-products.mdx`)
- **Content:**
  - Creating your first article
  - Required vs. optional fields
  - SKU best practices
  - Product dimensions and weight
  - Next steps

### 3.3 Manage Products (Articles) (How-To)
- **Type:** How-To Guide
- **Status:** ✅ Exists (`docs/guides/main-flow/manage-products.mdx`)
- **Content:**
  - Updating product information
  - Uploading product images
  - Product validation
  - Searching and retrieving articles
  - Bulk operations

### 3.4 Manage Product Bundles (How-To) ⚠️ FUTURE
- **Type:** How-To Guide
- **Status:** ⚠️ Priority 4 (Optional)
- **Suggested Path:** `docs/guides/main-flow/manage-product-bundles.mdx` (TBD)
- **Content:**
  - What are bundles?
  - Creating bundles
  - Bundle SKU mapping
  - Using bundles in orders

### 3.5 Monitor Inventory (Items API) (How-To)
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

### 3.6 Manage Shipments (How-To) ⚠️ MISSING - MEDIUM PRIORITY
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

### 3.7 Understanding Fulfillment Plans (Concept + How-To) ⚠️ MISSING - HIGH PRIORITY
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

---

## IV. Quivo Connector Web UI

**Purpose:** Documentation for merchants using The Connector web interface (non-technical users).

**Note:** This section may be maintained separately or integrated. Clarify with stakeholders whether this should be:
- A separate documentation site
- A section within this documentation
- Links to external Connector documentation

### 4.1 Dashboard Overview (Concept)
- **Type:** Concept
- **Content:**
  - Navigation overview
  - Key metrics and KPIs
  - Quick actions
  - Settings access

### 4.2 Creating Products and Bundles (UI) (How-To)
- **Type:** How-To Guide
- **Content:**
  - Adding products via UI
  - Product form fields
  - Uploading images
  - Creating bundles
  - Bulk import options

### 4.3 Requesting an Inbound (UI) (How-To)
- **Type:** How-To Guide
- **Content:**
  - Creating inbound requests via UI
  - Uploading packing lists
  - Tracking inbound status
  - Warehouse selection

### 4.4 Understanding Order Statuses (UI) (Concept)
- **Type:** Concept
- **Content:**
  - Status definitions: Processing, Shipped, On Hold, etc.
  - Status transition flow
  - Visual indicators
  - Status filters

### 4.5 Address Validation & Troubleshooting (UI) (How-To)
- **Type:** How-To Guide
- **Content:**
  - Address validation process
  - Common validation errors
  - Manual address correction
  - International address formats

### 4.6 Configuring the Return Portal (UI) (How-To)
- **Type:** How-To Guide
- **Content:**
  - Return portal setup
  - Return policy configuration
  - Return reasons and categories
  - Customer-facing return links

### 4.7 Processing a Received Return (UI) (How-To)
- **Type:** How-To Guide
- **Content:**
  - Viewing returned items
  - Return inspection
  - Restocking vs. disposal
  - Return status updates

### 4.8 Connecting Shop Systems (No-Code) (How-To)
- **Type:** How-To Guide
- **Content:**
  - Supported platforms (Shopify, WooCommerce, Magento, etc.)
  - Connection setup wizard
  - Authentication and permissions
  - Testing connections

### 4.9 Status Mapping (No-Code) (Concept + How-To)
- **Type:** Concept + How-To
- **Content:**
  - Understanding status mapping
  - Source system statuses vs. Quivo statuses
  - Configuring mappings
  - Troubleshooting sync issues

---

## V. API Reference (Technical Reference)

**Purpose:** Complete, precise API specification for developers.

### 5.1 Overview (Reference)
- **Type:** Reference
- **Status:** ✅ Exists (`api-reference/introduction.mdx`)
- **Content:**
  - API overview
  - Quick links to Quickstart guides
  - Links to Authentication guide

### 5.2 Environments (Reference)
- **Type:** Reference
- **Status:** ⚠️ **CREATE**
- **Suggested Path:** `api-reference/environments.mdx`
- **Content:**
  - Base URLs (Production, Sandbox)
  - When to use each environment
  - Environment-specific considerations and limitations (if any)

### 5.3 HTTP Response Codes (Reference)
- **Type:** Reference
- **Status:** ⚠️ **CREATE**
- **Suggested Path:** `api-reference/http-response-codes.mdx`
- **Content:**
  - Complete list of HTTP status codes used by the Quivo API
  - Common error codes and their meanings
  - Error response format
  - High-level troubleshooting guidance

### 5.4 Pagination & Idempotency (Reference)
- **Type:** Reference
- **Status:** ⚠️ **CREATE**
- **Suggested Path:** `api-reference/pagination-and-idempotency.mdx`
- **Content:**
  - How pagination is handled in the API
  - Request parameters for pagination (e.g., `page`, `limit`, cursors)
  - Idempotency strategy (if applicable)
  - Examples of idempotent operations and recommended usage

### 5.5 Authentication (Reference)
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

### 5.6 Endpoints
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
- `articles` – Product catalog
- `inbounds` – Inventory shipments
- `items` – Stock levels
- `orders` – Order management
- `shipments` – Shipment operations
- `returns` – Return processing
- `fulfillmentPlans` – Conditional logic
- `webhooks` – Event subscriptions
- `addresses` – Address management
- `shops` – Shop integrations
- And more…

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
              "docs/getting-started/integrating-with-quivo",
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

Below is the implementation plan for delivering the Quivo documentation by the target deadline of **January 20th, 2026**.

The primary goals are:

1. **Completeness and Accuracy:** Ensure all existing API calls are properly documented and that the foundational reference materials (HTTP Response Codes, Authentication, Environments, Pagination & Idempotency) are finalized.
2. **User-Centricity:** Provide a clear, step-by-step documentation of the typical customer journey (from creating articles to managing returns) and establish the necessary automation and maintenance processes for long-term sustainability and ease of adjustment.

We structure the work into four distinct phases, prioritizing the immediate completion of critical technical foundations and the primary developer workflow before addressing secondary content and final quality assurance.

### Roadmap Overview

| Phase           | Focus                               | Due Date  |
| --------------- | ------------------------------------ | --------- |
| Mintlify Setup  | Technical setup & automation         | Dec 16th  |
| Phase 1         | Core user journey                    | Dec 31st  |
| Phase 2         | API consistency                      | Jan 10th  |
| Phase 3         | Secondary content & Connector UI     | Jan 17th  |
| Phase 4         | Final review, maintenance & publish   | Jan 20th  |

### Mintlify Setup (Technical Setup & Automation) — Due Dec 16th

- ✅ Configure Mintlify project, environments, and deployment pipeline.
- ✅ Connect OpenAPI spec (`openapi.json`) and verify auto-generation of Endpoints.
- ✅ Set up overlay / description layer and automation for daily spec sync.

### Phase 1 – Core User Journey — Due Dec 31st ✅ COMPLETE

- ✅ Finalize and align Quickstart guides:
  - ✅ Send Inventory
  - ✅ Create a Fulfillment Order
  - ✅ Track an Order
  - ✅ Manage Returns
  - ✅ Manage Webhooks
- ✅ Ensure Introduction pages (Overview, Integrating with Quivo, Logistics Glossary) are complete and consistent.
- ✅ Additional completed: Request API Key, First API Call

### Phase 2 – API Consistency — Due Jan 10th 🔄 IN PROGRESS

- Create and/or finalize core reference pages:
  - ⚠️ Environments
  - ⚠️ HTTP Response Codes
  - ⚠️ Pagination & Idempotency
  - ✅ Authentication
- ✅ Review and standardize descriptions and examples across all OpenAPI-tagged endpoints.

### Phase 3 – Secondary Content & Connector UI — Due Jan 17th 🔄 IN PROGRESS

- Implement Quivo Flows guides:
  - ⚠️ Manage Orders
  - ⚠️ Manage Shipments
  - ✅ Monitor Inventory
  - ✅ Create / Manage Products (Create Products, Manage Products completed)
  - ⚠️ Product Bundles (optional, deferred to Priority 4)
- ⚠️ Build out Quivo Connector Web UI documentation (dashboard, inventory, order management, reverse logistics, integrations).

### Phase 4 – Final Review, Maintenance & Publish — Due Jan 20th

- Perform end-to-end review of navigation, content structure, and cross-linking.
- Validate examples via Mintlify Playground and, where possible, staging environments.
- Document ongoing maintenance processes (OpenAPI updates, overlay changes, review cadence).
- Publish and hand over documentation with clear ownership and review guidelines.

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