/**
 * Renders a JSON-LD block. Server component, so the markup is in the HTML
 * Google fetches rather than being injected after hydration.
 *
 * The stringify is escaped for "<" because a literal `</script>` inside the
 * JSON payload would otherwise close the tag early.
 */
export default function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
