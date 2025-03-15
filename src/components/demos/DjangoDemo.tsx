import React, { useState, useEffect } from "react";
import { DjangoDemoState } from "@/utils/demoStates";

interface DjangoRecord {
  id: number;
  title: string;
  content: string;
  author: string;
  created: string;
}

interface DjangoDemoProps {
  demoState: DjangoDemoState;
}

const DjangoDemo: React.FC<DjangoDemoProps> = ({ demoState }) => {
  const [records, setRecords] = useState<DjangoRecord[]>([]);
  const [selectedRecord, setSelectedRecord] = useState<DjangoRecord | null>(
    null
  );

  useEffect(() => {
    if (demoState.isPlaying) {
      // Generate sample blog records
      const sampleRecords = Array.from(
        { length: demoState.numRecords },
        (_, i) => ({
          id: i + 1,
          title: `Article ${i + 1}`,
          content: `This is the content for article ${
            i + 1
          }. Django makes it easy to create and manage web content.`,
          author: ["John", "Jane", "Alex", "Maria"][
            Math.floor(Math.random() * 4)
          ],
          created: new Date(Date.now() - Math.random() * 10000000000)
            .toISOString()
            .split("T")[0],
        })
      );

      setRecords(sampleRecords);

      // If detail view is selected, set a record
      if (demoState.viewType === "detail" && sampleRecords.length > 0) {
        setSelectedRecord(sampleRecords[0]);
      } else {
        setSelectedRecord(null);
      }
    } else {
      setRecords([]);
      setSelectedRecord(null);
    }
  }, [demoState.isPlaying, demoState.viewType, demoState.numRecords]);

  const renderListView = () => (
    <div className="bg-muted/20 rounded-lg p-4 overflow-auto h-full">
      <h3 className="text-lg font-semibold mb-4">Blog Articles</h3>
      {records.map((record) => (
        <div key={record.id} className="mb-4 p-3 bg-card rounded-md shadow-sm">
          <div className="flex justify-between items-center mb-2">
            <h4 className="font-medium">{record.title}</h4>
            <span className="text-xs text-muted-foreground">
              {record.created}
            </span>
          </div>
          <p className="text-sm mb-2 text-muted-foreground">
            {record.content.substring(0, 60)}...
          </p>
          <div className="text-xs text-primary">By {record.author}</div>
        </div>
      ))}
    </div>
  );

  const renderDetailView = () => (
    <div className="bg-muted/20 rounded-lg p-4 h-full">
      {selectedRecord ? (
        <>
          <h2 className="text-2xl font-semibold mb-2">
            {selectedRecord.title}
          </h2>
          <div className="flex items-center text-sm text-muted-foreground mb-4">
            <span>By {selectedRecord.author}</span>
            <span className="mx-2">•</span>
            <span>{selectedRecord.created}</span>
          </div>
          <div className="border-t pt-4">
            <p>{selectedRecord.content}</p>
            <p className="mt-2">{selectedRecord.content}</p>
          </div>
        </>
      ) : (
        <p>No record selected</p>
      )}
    </div>
  );

  const renderAdminView = () => (
    <div className="bg-slate-800 text-white rounded-lg p-4 h-full">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-semibold">Django Admin</h3>
        <div className="flex gap-2">
          <span className="text-xs bg-green-700 px-2 py-1 rounded">+ Add</span>
          <span className="text-xs bg-blue-700 px-2 py-1 rounded">Actions</span>
        </div>
      </div>

      <table className="w-full text-sm">
        <thead className="bg-slate-700">
          <tr>
            <th className="p-2 text-left">ID</th>
            <th className="p-2 text-left">Title</th>
            <th className="p-2 text-left">Author</th>
            <th className="p-2 text-left">Created</th>
          </tr>
        </thead>
        <tbody>
          {records.map((record) => (
            <tr key={record.id} className="border-b border-slate-700">
              <td className="p-2">{record.id}</td>
              <td className="p-2">{record.title}</td>
              <td className="p-2">{record.author}</td>
              <td className="p-2">{record.created}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  return (
    <div className="flex flex-col h-full">
      {demoState.isPlaying ? (
        <>
          {demoState.showAdmin
            ? renderAdminView()
            : demoState.viewType === "detail"
            ? renderDetailView()
            : renderListView()}
        </>
      ) : (
        <div className="flex items-center justify-center h-full">
          <p className="text-muted-foreground text-center">
            Налаштуйте перегляд Django та натисніть «Відобразити сторінку»
          </p>
        </div>
      )}
    </div>
  );
};

export default DjangoDemo;
