import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Icon } from '../Common';
import { Link, useNavigate } from 'react-router-dom';
import { getIndexedColor } from '../../Helpers/colors';

function ExerciseCard({ exercise, onEdit, ...props }) {
  const navigate = useNavigate();

  const { title, description, id } = exercise;

  const color = getIndexedColor(id);

  return (
    <>
      <Card className="min-h-100 shadow" style={{ borderColor: `${color}` }}>
        <Card.Body>
          <div className="d-flex justify-content-center">
            <div
              className="d-flex align-items-center justify-content-center rounded-circle text-light"
              style={{ width: '65px', height: '65px', backgroundColor: `${color}` }}
            >
              <Icon name="Notes" size={40}></Icon>
            </div>
          </div>
          <div className="d-flex flex-column align-items-center my-3 gap-1">
            <div className="h4">{title}</div>
            <div className="overflow-lines text-wrap mw-100">{description}</div>
          </div>
        </Card.Body>
        <Card.Footer className="p-0" style={{ backgroundColor: `${color}`, borderColor: `${color}` }}>
          <div className="d-flex justify-content-center">
            {!onEdit && (
              <div
                className="cursor-pointer flex-grow-1 text-center p-2"
                onClick={() => {
                  navigate(`/app/exercise/${id}`);
                }}
              >
                Egzersiz Seç
              </div>
            )}
            {onEdit && (
              <div
                className="cursor-pointer flex-grow-1 text-center p-2"
                onClick={() => {
                  navigate(`/app/my/exercises/edit/${id}`);
                }}
              >
                Düzenle
              </div>
            )}
          </div>
        </Card.Footer>
      </Card>
    </>
  );
}

export default ExerciseCard;
