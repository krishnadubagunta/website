"use client";
import { useEffect, useState } from "react";
import { Button } from "kd-ui/ui/button";
import H3 from "kd-ui/ui/typography/h3";
import Muted from "kd-ui/ui/typography/muted";

export default function Resume() {
  const [content, setContent] = useState("");
  const [updatedAt, setUpdatedAt] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/resume")
      .then((res) => res.json())
      .then(({ data }) => {
        setContent(data?.content ?? "");
        setUpdatedAt(data?.updatedAt ?? null);
      })
      .finally(() => setLoading(false));
  }, []);

  async function onSave() {
    setSaving(true);
    setError(null);
    try {
      const res = await fetch("/api/resume", {
        method: "POST",
        body: JSON.stringify({ content }),
      });
      const json = await res.json();
      if (!res.ok || !json.success) {
        setError(json.message ?? "Failed to save");
        return;
      }
      setUpdatedAt(json.data.updatedAt);
    } finally {
      setSaving(false);
    }
  }

  if (loading) {
    return <Muted>Loading resume...</Muted>;
  }

  return (
    <div className="flex flex-col gap-4 pt-2">
      <div className="flex items-center justify-between">
        <H3>Resume</H3>
        {updatedAt && (
          <Muted>Last updated {new Date(updatedAt).toLocaleString()}</Muted>
        )}
      </div>
      <textarea
        className="p-3 rounded border-neutral-300 border bg-transparent focus:outline-none font-mono text-sm min-h-[500px]"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      {error && <p className="text-sm text-red-500">{error}</p>}
      <div className="flex justify-end">
        <Button onClick={onSave} disabled={saving}>
          {saving ? "Saving..." : "Save & publish"}
        </Button>
      </div>
    </div>
  );
}
