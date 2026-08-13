import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/site/LegalPage";
import { company } from "@/data/site";

export const Route = createFileRoute("/accessibility")({
  head: () => ({
    meta: [{ title: `הצהרת נגישות | ${company.name}` }],
  }),
  component: AccessibilityPage,
});

function AccessibilityPage() {
  return (
    <LegalPage title="הצהרת נגישות">
      <p>עדכון אחרון: 2026.</p>

      <h2>המחויבות שלנו</h2>
      <p>
        {company.name} רואה חשיבות רבה במתן שירות שוויוני ונגיש לכלל הגולשים, לרבות אנשים עם
        מוגבלות. אנו פועלים להנגשת האתר בהתאם לעקרונות תקן ישראלי 5568 המבוסס על הנחיות
        WCAG 2.0 ברמה AA, ומעדכנים ומשפרים את הנגישות באופן שוטף.
      </p>

      <h2>מצב ההנגשה הנוכחי</h2>
      <p>
        האתר נבנה תוך שימוש בסימון סמנטי, ניגודיות צבעים נאותה, תמיכה בניווט מקלדת ותמיכה מלאה
        בכיווניות עברית (RTL). ההנגשה טרם עברה בדיקה על ידי גורם מוסמך חיצוני, ואיננו יכולים להצהיר
        בשלב זה על עמידה מלאה ומאושרת בתקן.
      </p>

      <h2>נתקלתם בבעיית נגישות?</h2>
      <p>
        נשמח לשמוע ולתקן. ניתן לפנות אלינו בטלפון {company.phone} או במייל {company.email}, ואנו
        נטפל בפנייה בהקדם האפשרי.
      </p>
    </LegalPage>
  );
}
